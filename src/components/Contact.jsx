import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer } from '../utils/motion';
import { styles } from '../styles';
import { contactPeople } from '../constants';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';

export function Contact() {
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
)
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <>
    <span id='contact'>
            &nbsp;  
        </span>
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >

        

        <div className='bg-tertiary/20 rounded-lg p-10'>

        <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Get In Touch</p>
                <h2 className={styles.sectionHeadTextContact}>Contact Us.</h2>
            </motion.div>
    <form onSubmit={form.onSubmit(() => {})}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md" className='bg-black !important'>
          Send message
        </Button>
      </Group>
    </form>
    </div>

    <div className='flex flex-col gap-4 md:flex-row w-[100%] mb-10 justify-center md:justify-between items-center'>
        {contactPeople.map((contact) => (
              <EmployeeCard key={contact.name} {...contact}/>
        ))}
    </div>
    </motion.section>
    </>
  );
}