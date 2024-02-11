import React from 'react'
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Text } from '@mantine/core';

const EmployeeCard = ({ name, cell, email, position }) => (
    <Group wrap="nowrap" className='bg-black/75 mt-10 border-solid border-white-100 w-full border-2 p-2 lg:p-4 rounded-xl'>
    {/* <Avatar
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
      size={94}
      radius="md"
    /> */}
    <div>
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        {position}
      </Text>

      <Text fz="md" fw={500} truncate>
        {name}
      </Text>

      <Group wrap="nowrap" gap={5} mt={3}>
        <IconAt stroke={1.5} size="1rem" />
        <Text fz="xs" c="dimmed" truncate>
          {email}
        </Text>
      </Group>

      <Group wrap="nowrap" gap={10} mt={5}>
        <IconPhoneCall stroke={1.5} size="1rem" />
        <Text fz="xs" c="dimmed">
          {cell}
        </Text>
      </Group>
    </div>
  </Group>
);

export default EmployeeCard