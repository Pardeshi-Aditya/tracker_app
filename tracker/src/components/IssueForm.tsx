import { Box, Flex, Select, Text, TextArea } from "@radix-ui/themes";
import { Controller, useFormContext } from "react-hook-form";

export const IssueForm = () => {
    const { register, control } = useFormContext();

    return (
        <Flex direction="column" gap="4">
            <Flex direction={"column"}>
                <Text>Description</Text>
                <TextArea {...register("description")} rows={4} />
            </Flex>
            <Box>
                <Flex direction={"column"}>
                    <Text>Status</Text>
                    <Controller
                        control={control}
                        name="status"
                        render={({ field }) => (
                            <Select.Root
                                value={field.value}
                                onValueChange={field.onChange}
                                required
                            >
                                <Select.Trigger placeholder="Status" />
                                <Select.Content>
                                    <Select.Group>
                                        <Select.Label>Status</Select.Label>
                                        <Select.Item value={"Open"}>Open</Select.Item>
                                        <Select.Item value={"In-Progress"}>In-Progress</Select.Item>
                                        <Select.Item value={"Closed"}>Closed</Select.Item>
                                    </Select.Group>
                                </Select.Content>
                            </Select.Root>
                        )}
                    />
                </Flex>
            </Box>
            <Box>
                <Flex direction={"column"}>
                    <Text>Priority</Text>
                    <Controller
                        control={control}
                        name="priority"
                        render={({ field }) => (
                            <Select.Root
                                value={field.value}
                                onValueChange={field.onChange}
                                required
                            >
                                <Select.Trigger placeholder="Priority" />
                                <Select.Content>
                                    <Select.Group>
                                        <Select.Label>Priority</Select.Label>
                                        <Select.Item value={"High"}>High</Select.Item>
                                        <Select.Item value={"Medium"}>Medium</Select.Item>
                                        <Select.Item value={"Low"}>Low</Select.Item>
                                    </Select.Group>
                                </Select.Content>
                            </Select.Root>
                        )}
                    />
                </Flex>
            </Box>
            <Box>
                <Flex direction={"column"}>
                    <Text>Allocated To</Text>
                    <Controller
                        control={control}
                        name="allocated_to"
                        render={({ field }) => (
                            <Select.Root
                                value={field.value}
                                onValueChange={field.onChange}
                                required
                            >
                                <Select.Trigger placeholder="Allocated To" />
                                <Select.Content>
                                    <Select.Group>
                                        <Select.Label>Allocated To</Select.Label>
                                        <Select.Item value={"aditya.pardeshi@thecommit.company"}>
                                            Aditya Pardeshi
                                        </Select.Item>
                                        <Select.Item value={"amit@email.com"}>Amit</Select.Item>
                                    </Select.Group>
                                </Select.Content>
                            </Select.Root>
                        )}
                    />
                </Flex>
            </Box>
        </Flex>
    );
};
