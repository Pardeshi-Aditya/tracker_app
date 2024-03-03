import {
    Box,
    Badge,
    Flex,
    DropdownMenu,
    IconButton,
    Separator,
} from "@radix-ui/themes";
import { stripHtmlTags } from "../utils/stripHtmlTags";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { useFrappeUpdateDoc } from "frappe-react-sdk";

type Props = {
    arr: any[];
    title: string;
    thecolor: any;
    mutate: VoidFunction;
};

const StatusBlock = ({ arr, title, thecolor, mutate }: Props) => {
    const { updateDoc, reset } = useFrappeUpdateDoc()

    const updateStatus = (id: string, status: string) => {
        updateDoc('ToDo', id, {
            status: status
        }).then(() => {
            reset()
            mutate()
        })
    }
    return (
        <>
            <Flex direction={"column"} gap='3' width={'100%'}>
                <Badge style={{
                    width: "fit-content"
                }} size="1" color={thecolor}> {title}</Badge>
                <Separator size={'4'} />
                {arr.map((item) => (
                    <>
                        <div className="flex-item">
                            <Flex justify={"center"} direction={"column"} gap={"1"}>
                                {stripHtmlTags(item.description)}
                                <Box>
                                    <Flex justify={'start'}>
                                        <Badge size="1" color="violet">{item.allocated_to}</Badge>
                                    </Flex>
                                    <Flex justify={'end'} gap={'2'}>
                                        {item.priority === "Low" && <Badge size="1" color="yellow">{item.priority}</Badge>}
                                        {item.priority === "Medium" && <Badge size="1" color="orange">{item.priority}</Badge>}
                                        {item.priority === "High" && <Badge size="1" color="red">{item.priority}</Badge>}

                                        <DropdownMenu.Root>
                                            <DropdownMenu.Trigger>
                                                <IconButton size={'1'} color="jade">
                                                    <DoubleArrowDownIcon />
                                                </IconButton>
                                            </DropdownMenu.Trigger>
                                            <DropdownMenu.Content>
                                                <DropdownMenu.Item onClick={() => updateStatus(item.name, 'Open')}>
                                                    Open
                                                </DropdownMenu.Item>
                                                <DropdownMenu.Item onClick={() => updateStatus(item.name, 'In-Progress')}>
                                                    In-Progress
                                                </DropdownMenu.Item>
                                                <DropdownMenu.Item onClick={() => updateStatus(item.name, 'Closed')}>
                                                    Closed
                                                </DropdownMenu.Item>
                                            </DropdownMenu.Content>
                                        </DropdownMenu.Root>
                                    </Flex>
                                </Box>
                            </Flex>
                        </div>
                    </>
                ))}
            </Flex>
        </>
    );
};

export default StatusBlock;
