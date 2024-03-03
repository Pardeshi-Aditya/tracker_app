import { Button, Flex, Separator, Text } from '@radix-ui/themes';
import { useFrappeGetDocList } from 'frappe-react-sdk';
import StatusBlock from './StatusBlock';
import { useNavigate } from 'react-router-dom';

const TrackBoard = () => {

    const { data, mutate } = useFrappeGetDocList('ToDo', {
        fields: ['name', 'description', 'allocated_to', 'status', 'priority'],
    });

    const openArray: any[] = [];
    const inprogArray: any[] = [];
    const closedArray: any[] = [];

    if (data) {
        data.map((item) => {
            if (item.status === 'Open') {
                openArray.push(item);
            } else if (item.status === 'In-Progress') {
                inprogArray.push(item);
            } else if (item.status === 'Closed') {
                closedArray.push(item);
            }
        });
    }

    const navigate = useNavigate()

    return (

        <Flex gap={'2'} direction={'column'} px={'4'} py={'2'} style={{
            height: '90vh'
        }}>
            <Flex px={'2'} justify={'between'} gap={'4'}>

                <header>
                    <Text size='6' weight='bold'>Create Issue</Text>
                </header>
                <Button radius="large" onClick={() => navigate('./create')}>Create New Issue</Button>
            </Flex>
            <Separator style={{
                padding: '4'
            }} size='4' />
            <Flex gap={'6'} pt={'2'}>
                <StatusBlock arr={openArray} title={'Open'} thecolor={'green'} mutate={mutate} />
                <StatusBlock arr={inprogArray} title={'In-Progress'} thecolor={'blue'} mutate={mutate} />
                <StatusBlock arr={closedArray} title={'Closed'} thecolor={'red'} mutate={mutate} />
            </Flex>
        </Flex >
    );
};

export default TrackBoard;
