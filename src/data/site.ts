export const site = {
	name: 'Ionel Silviu Ghimpau',
	shortName: 'ISG',
	tagline: 'Open-source software & systems engineering',
	description:
		'Personal site of Ionel Silviu Ghimpau, with open-source Windows tools, network projects, and infrastructure automation.',
	url: 'https://silviu3369.github.io',
	email: 'ghimpausilviu@gmail.com',
	github: 'https://github.com/Silviu3369',
	githubHandle: 'Silviu3369',
	linkedin: 'https://www.linkedin.com/in/silviu-ghimpau/?locale=en',
	linkedinHandle: 'silviu-ghimpau',
};

export type Product = {
	slug: string;
	name: string;
	kicker: string;
	description: string;
	longDescription: string;
	version: string;
	releaseDate: string;
	platform: string;
	status: 'Stable';
	repository: string;
	download: string;
	logo: string;
	accent: string;
	features: string[];
	principles: { title: string; text: string }[];
};

export const products: Product[] = [
	{
		slug: 'isg-doctor',
		name: 'ISG Doctor',
		kicker: 'Windows diagnostics & controlled repair',
		description:
			'A Windows health check that gathers the useful evidence before any repair begins.',
		longDescription:
			'ISG Doctor puts the Windows checks I use most often in one place. It scans first without changing the machine, explains what it found, and keeps repair actions separate until the user confirms them.',
		version: '1.0.3',
		releaseDate: '09 July 2026',
		platform: 'Windows 10 / 11',
		status: 'Stable',
		repository: 'https://github.com/Silviu3369/ISG-Doctor',
		download: 'https://github.com/Silviu3369/ISG-Doctor/releases/latest',
		logo: '/assets/isg-doctor.ico',
		accent: '#4f8cff',
		features: [
			'Windows, disk, performance, security, network, device and battery checks',
			'Health score and evidence-led findings',
			'Separate, confirmed repair actions',
			'HTML scan and battery reports',
		],
		principles: [
			{ title: 'Inspect first', text: 'A scan gathers evidence without changing the machine.' },
			{ title: 'Explain the action', text: 'Repairs describe their effect before execution.' },
			{ title: 'Leave a record', text: 'Reports make findings easier to review and hand off.' },
		],
	},
	{
		slug: 'isg-desk',
		name: 'ISG Desk',
		kicker: 'Local network diagnostics for IT support',
		description:
			'A local workspace for the network checks that come up most often in Tier 1 and Tier 2 support.',
		longDescription:
			'ISG Desk brings adapter, IP, DHCP, DNS, gateway, Wi-Fi, printer, server, port, and SNMP checks into one desktop application. I built it to make first-line network troubleshooting less scattered.',
		version: '1.1.0',
		releaseDate: '12 June 2026',
		platform: 'Windows 10 / 11',
		status: 'Stable',
		repository: 'https://github.com/Silviu3369/ISG-Desk',
		download: 'https://github.com/Silviu3369/ISG-Desk/releases/latest',
		logo: '/assets/isg-desk.webp',
		accent: '#38c9b9',
		features: [
			'Quick diagnosis with a 0–100 health score',
			'DNS, gateway, internet and service probes',
			'Printer and network-device discovery',
			'Guided evidence and report export',
		],
		principles: [
			{ title: 'Local by design', text: 'The diagnostic workflow stays on the technician’s machine.' },
			{ title: 'Evidence over guesses', text: 'Each verdict is backed by observable checks.' },
			{ title: 'Built for hand-off', text: 'Results are structured for real support workflows.' },
		],
	},
	{
		slug: 'isg-printer',
		name: 'ISG Printer',
		kicker: 'Portable printer support toolkit',
		description:
			'A portable tool for finding, installing, and troubleshooting printers without jumping between utilities.',
		longDescription:
			'ISG Printer keeps the common printer-support jobs together: finding print servers, installing queues, checking the spooler, working through diagnostics, and reading live SNMP information.',
		version: '1.0.0',
		releaseDate: '02 July 2026',
		platform: 'Windows 10 / 11',
		status: 'Stable',
		repository: 'https://github.com/Silviu3369/ISG-Printer',
		download: 'https://github.com/Silviu3369/ISG-Printer/releases/latest',
		logo: '/assets/isg-printer.webp',
		accent: '#8b7cff',
		features: [
			'Print-server and direct-IP discovery',
			'Queue installation and local-printer management',
			'Layered diagnostics with technician guidance',
			'SNMP toner, model, serial and page-count reads',
		],
		principles: [
			{ title: 'Portable', text: 'A self-contained technician tool designed to run where it is needed.' },
			{ title: 'Focused', text: 'The interface stays centered on printer support work.' },
			{ title: 'Useful next steps', text: 'Diagnostics point toward actions a technician can review and choose.' },
		],
	},
];

export type EngineeringProject = {
	slug: string;
	name: string;
	category: string;
	description: string;
	context: string;
	repository: string;
	image?: string;
	accent: string;
	technologies: string[];
	highlights: string[];
	designNotes: { title: string; text: string }[];
};

export const engineeringProjects: EngineeringProject[] = [
	{
		slug: 'corporate-multi-zone-network',
		name: 'Corporate Multi-Zone Network',
		category: 'Enterprise network architecture',
		description:
			'A four-zone enterprise network lab built around dual-hub DMVPN, segmentation, redundancy, and shared services.',
		context:
			'I built this project to work through how headquarters, a DMZ, operations, finance, and marketing could stay separated while still using shared management and security services.',
		repository: 'https://github.com/Silviu3369/Corporate-Multi-Zone-Network',
		image: '/assets/corporate-multi-zone-topology.webp',
		accent: '#4f8cff',
		technologies: ['Cisco ASA', 'DMVPN', 'IPsec', 'OSPF', 'HSRP', 'VLAN', 'ZBF', 'NAT'],
		highlights: [
			'Dual-hub encrypted connectivity across four enterprise zones',
			'Gateway and switching redundancy through HSRP',
			'Central services, DMZ, management, and security boundaries',
			'Operational services for NTP, SYSLOG, DNS, DHCP, and identity',
		],
		designNotes: [
			{ title: 'Segmentation', text: 'Departments, services, management, and public-facing systems remain separated by explicit network boundaries.' },
			{ title: 'Resilience', text: 'Dual hubs and redundant gateways keep the architecture useful beyond a single-path lab.' },
			{ title: 'Operational visibility', text: 'Central NTP and SYSLOG provide a consistent foundation for troubleshooting and auditing.' },
		],
	},
	{
		slug: 'hq-branch-secure-network',
		name: 'HQ–Branch Secure Network',
		category: 'Secure branch connectivity',
		description:
			'A Packet Tracer HQ and branch lab with a DMZ, site-to-site VPN, dynamic routing, redundancy, and switch security.',
		context:
			'I used this lab to bring several topics into one working network: secure site connectivity, resilient routing, controlled public services, and safer access switching.',
		repository: 'https://github.com/Silviu3369/HQ-Branch-Secure-Network',
		image: '/assets/hq-branch-topology.webp',
		accent: '#38c9b9',
		technologies: ['Cisco ASA', 'OSPF', 'HSRP', 'IPsec VPN', 'DMZ', 'NAT', 'ACL', 'Rapid-PVST'],
		highlights: [
			'Site-to-site IPsec connectivity between HQ and branch',
			'Public-service isolation through a dedicated DMZ',
			'DHCP snooping, DAI, port security, and STP protection',
			'Validation commands and connectivity tests documented alongside the design',
		],
		designNotes: [
			{ title: 'Layered security', text: 'Firewall, ACL, switching, and management controls work together instead of relying on one perimeter.' },
			{ title: 'Controlled exposure', text: 'Static NAT and policy boundaries expose only intended DMZ services.' },
			{ title: 'Testable outcomes', text: 'VPN, routing, NAT, DHCP, and failover expectations are paired with validation steps.' },
		],
	},
	{
		slug: 'cisco-blaze',
		name: 'Cisco Blaze',
		category: 'Multi-site network foundation',
		description:
			'A two-office enterprise lab exploring segmentation, routing, security, and resilient network design as one documented system.',
		context:
			'I started Cisco Blaze as a network foundation, then reused its offices and departments in the companion Active Directory automation project. The two projects now describe the same fictional environment from different sides.',
		repository: 'https://github.com/Silviu3369/Cisco-Blaze-project',
		image: '/assets/cisco-blaze-topology.webp',
		accent: '#8b7cff',
		technologies: ['Cisco IOS', 'VLAN', 'OSPF', 'HSRP', 'ASA', 'ACL', 'Enterprise design'],
		highlights: [
			'Two-office topology with defined organizational boundaries',
			'Segmentation and resilient gateway design',
			'Documented routing and security decisions',
			'Shared model with Active Directory automation',
		],
		designNotes: [
			{ title: 'One infrastructure model', text: 'Network locations and departments become reusable inputs for identity and access automation.' },
			{ title: 'Documented design', text: 'The project treats explanation as part of the engineering output.' },
			{ title: 'Expandable foundation', text: 'The topology can be extended with services, automation, and validation layers.' },
		],
	},
	{
		slug: 'blaze-ad-automation',
		name: 'Blaze AD Automation',
		category: 'Infrastructure automation',
		description:
			'A PowerShell framework that turns the Cisco Blaze site and department model into repeatable Active Directory provisioning.',
		context:
			'I built this after Cisco Blaze to see how the same office and department model could drive Active Directory work. It creates organizational units, groups, users, folders, shares, permissions, and an audit record from one set of inputs.',
		repository: 'https://github.com/Silviu3369/Blaze-AD-Automation',
		accent: '#e8a33d',
		technologies: ['PowerShell', 'Active Directory', 'RBAC', 'SMB', 'NTFS ACL', 'CSV audit'],
		highlights: [
			'Organizational units aligned with physical sites and departments',
			'Role-based global and domain-local group provisioning',
			'Home folders, departmental shares, and NTFS permissions',
			'Audit reports for review and documentation',
		],
		designNotes: [
			{ title: 'Repeatability', text: 'Infrastructure state is created from a consistent model instead of manual one-off actions.' },
			{ title: 'Least-privilege structure', text: 'Group design separates role membership from resource access.' },
			{ title: 'Traceability', text: 'Audit output makes the generated result easier to inspect and document.' },
		],
	},
];

export const labProjects = [
	{
		name: 'GalileoEngine',
		type: 'Browser systems research',
		description: 'An experimental browser project where I document what works, what does not, and what I learn along the way.',
		url: 'https://silviu3369.github.io/galileoengine-site-v2/',
	},
	{
		name: 'AION',
		type: 'AI systems experiment',
		description: 'A hands-on assistant experiment combining voice, tools, and smart-home interface ideas.',
		url: 'https://github.com/Silviu3369/AION',
	},
	{
		name: 'Nexus',
		type: 'AI interface lab',
		description: 'A small TypeScript interface I use to explore AI-assisted interaction ideas.',
		url: 'https://github.com/Silviu3369/Nexus',
	},
];

export const techMarquee = [
	'WPF / .NET',
	'PowerShell',
	'Cisco IOS',
	'OSPF',
	'DMVPN',
	'IPsec',
	'HSRP',
	'SNMP',
	'Active Directory',
	'WMI',
	'NTFS ACL',
	'Packet Tracer',
	'Astro',
	'TypeScript',
];

export const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'Products', href: '/products' },
	{ label: 'Engineering', href: '/engineering' },
	{ label: 'Open Source', href: '/open-source' },
	{ label: 'Contact', href: '/contact' },
];
