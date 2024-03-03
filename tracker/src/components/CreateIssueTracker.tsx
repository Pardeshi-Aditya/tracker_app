import { Flex, Separator, Button, Text } from "@radix-ui/themes"
import { useFrappeCreateDoc } from "frappe-react-sdk"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { IssueForm } from "./IssueForm"

export const CreateIssueTracker = () => {

    const navigate = useNavigate()

    const methods = useForm({
        defaultValues: {
            priority: 'Medium',
            status: 'Open'
        }
    })
    const { createDoc, loading, reset } = useFrappeCreateDoc()

    const onSubmit = (data: any) => {
        createDoc('ToDo', data)
            .then(() => {
                reset()
                methods.reset()
            }).then(() => {
                navigate(`../todo`)
            })
    }

    return (
        <Flex direction='column' gap='4' py='4' width={'100%'} height={'100%'} style={{
            alignItems: 'center',
            justifyContent: 'start',
            minHeight: '100vh'
        }}>
            <Flex direction='column' gap='4' pt={'4'} width='100%' style={{
                maxWidth: '700px'
            }} >
                <BackButton />
                <Flex direction='column' gap='4' width='100%' px={'2'}>
                    <Flex justify={'between'} gap={'4'}>

                        <header>
                            <Text size='6' weight='bold'>Create Issue</Text>
                        </header>
                        <Button onClick={methods.handleSubmit(onSubmit)} disabled={loading} variant='solid'>
                            Create Issue
                        </Button>
                    </Flex>
                    <Separator size='4' />

                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <IssueForm />
                        </form>
                    </FormProvider>
                </Flex>
            </Flex>
        </Flex>

    )
}

export const BackButton = () => {

    const navigate = useNavigate()

    return (
        <header>
            <Flex pl={'2'}
                align='center'
                gap={'1'}
                onClick={() => navigate('/todo')}>
                <Button size='1' color="jade">Back</Button>
            </Flex>
        </header>
    )
}