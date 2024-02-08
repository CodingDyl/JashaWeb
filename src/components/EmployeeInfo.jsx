import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { contactPeople } from '../constants';

const EmployeeInfo = () => {
    const EmployeeCard = ({ name, position, cell, email }) => (
      <Group wrap="nowrap" className='bg-black/75 p-4 rounded-xl'>
        {/* <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={94}
          radius="md"
        /> */}
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Sales
          </Text>

          <Text fz="lg" fw={500} >
            John Doe
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              doejohn@mail.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              +27 07 327 1040
            </Text>
          </Group>
        </div>
      </Group>
    )

  return (
    <div className='flex flex-col gap-4 md:gap-0 md:flex-row w-[100%] justify-center md:justify-between items-center'>
        {contactPeople.map((contact) => {
            <EmployeeCard key={contact.name} {...contact} />
        })}
    </div>
  );
}

export default EmployeeInfo;