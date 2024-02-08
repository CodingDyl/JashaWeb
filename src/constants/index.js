const navLinks = [
    {
        id: "#about",
        title: "About Us"
    },
    {
        id: "#offer",
        title: "What we offer"
    },
    {
        id: "#contact",
        title: "Contact Us"
    },
];

const contactPeople = [
    {
      name: 'Billy Butcher',
      email: 'jsc@email.co.za',
      cell: '079 796 3113',
      position: 'Jasha Consultant'
    },
    {
      name: 'Donald Swab',
      email: 'random@email.com',
      cell: '083 548 4541',
      position: 'Knit Wire Consaltant'
    },
    {
      name: 'John Doe',
      email: 'email@email.com',
      cell: '082 325 4053',
      position: 'Bio Fuel Consultant'
    },
  ];

const footerLinks = [
    {
        title: "About",
        links: [
            { label: "Who we are", link: "#about" },
            { label: "Certificate", link: "#forms" },
            { label: "Contact", link: "#contact" },
            { label: "FAQ", link: '#faq'}
        ]
    },
    {
        title: "Declarations",
        links: [ {
            label: "Complaints, appeals and disputes",
            link: "#complaints"
        },
        {
            label: "Impartiality Statement",
            link: "#impartiality"
        },
        {
            label: "B-BBEE Consulting",
            link: "#faq"
        },
        {
            label: "B-BBEE Certificate",
            link: "#forms"
        },
        {
          label: "Accreditation",
          link: "#accredidation"
        },
        {
          label: "Youth Employment Service",
          link: "#faq"
        },
    ]
    },
    {
        title: "Information",
        links: [ {
            label: "Verification Approach",
            link: "#verification"
        },
        {
            label: "Complaints",
            link: "#complaints"
        },
        {
            label: "Accreditation",
            link: "#accreditation"
        },
        {
            label: "BEE Directory",
            link: "https://cloud.procureactiv.co.za/procurement/suppliers/advanced-search"
        }
    ]
    }
];

export {navLinks, footerLinks, contactPeople};