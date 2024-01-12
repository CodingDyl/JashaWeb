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

export {navLinks, footerLinks};