# Bangladesh Digital Safety, Online Harm, AI Abuse, and Copyright Law Reference

Research date: 23 May 2026  
Jurisdiction: Bangladesh  
Status note: This is a research reference, not legal advice.

## Current-Law Snapshot

The current core cyber law is the **Cyber Security Act, 2026** (`সাইবার সুরক্ষা আইন, ২০২৬`, Act No. 81 of 2026), gazetted on **10 April 2026**. Section 1(2) states that it is deemed to have come into force on **21 May 2025**.

The Cyber Security Act, 2026 expressly repeals:

- **Cyber Security Act, 2023** (`সাইবার নিরাপত্তা আইন, ২০২৩`) by Section 50.
- **Cyber Security Ordinance, 2025** and **Cyber Security (Amendment) Ordinance, 2025** by Section 51.

For fresh/current analysis, use the **2026 Act**, not the repealed 2023 Act or 2025 Ordinance.

## Research Method And Source Trail

I used **a web scraper** to scrape the current Cyber Security Act, Government Press gazette page, Legislative Division page, and supporting BDLaws pages. The scrape artifacts are saved under `sources/scraped/`.

Firecrawl was requested as an option, but the local Firecrawl CLI was not available. A browser-based scraper succeeded and was used for the source collection.

Primary sources used:

| Source | Link |
|---|---|
| Bangladesh Legal Database: Cyber Security Act, 2026 | [bdlaws.minlaw.gov.bd/act-1710.html](http://bdlaws.minlaw.gov.bd/act-1710.html) |
| Government Press gazette PDF: Cyber Security Act, 2026 | [dpp.gov.bd/upload_file/gazettes/61159_64458.pdf](http://www.dpp.gov.bd/upload_file/gazettes/61159_64458.pdf) |
| Government Press gazette listing | [dpp.gov.bd/bgpress/.../61159](https://www.dpp.gov.bd/bgpress/index.php/document/get_extraordinary/61159) |
| Legislative Division 2026 Acts list | [legislativediv.gov.bd/pages/static-pages/69df4f84e252a315b7e6b8db](https://legislativediv.gov.bd/pages/static-pages/69df4f84e252a315b7e6b8db) |
| Pornography Control Act, 2012 | [bdlaws.minlaw.gov.bd/act-1091.html](http://bdlaws.minlaw.gov.bd/act-1091.html) |
| Nari o Shishu Nirjatan Daman Ain, 2000 | [bdlaws.minlaw.gov.bd/act-835.html](http://bdlaws.minlaw.gov.bd/act-835.html) |
| Copyright Act, 2023 | [bdlaws.minlaw.gov.bd/act-1452.html](http://bdlaws.minlaw.gov.bd/act-1452.html) |
| Penal Code, 1860 | [bdlaws.minlaw.gov.bd/act-11.html](http://bdlaws.minlaw.gov.bd/act-11.html) |
| Personal Data Protection Act, 2026 | [bdlaws.minlaw.gov.bd/act-1692.html](http://bdlaws.minlaw.gov.bd/act-1692.html) |
| National Data Management Act, 2026 | [bdlaws.minlaw.gov.bd/act-1709.html](http://bdlaws.minlaw.gov.bd/act-1709.html) |

## Digital Safety And Core Cyber Offences

Source Act: **Cyber Security Act, 2026** (`সাইবার সুরক্ষা আইন, ২০২৬`)

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 2 | `সংজ্ঞা` | Section 2(1)(ঢ) | Defines `ডিজিটাল` broadly to include electrical, electronic, digital magnetic, optical, biometric, wireless and electromagnetic technologies, plus AI technology, blockchain, large language models, and machine vision. This makes the Act expressly technology-wide, including AI-enabled systems. |
| Section 2 | `সংজ্ঞা` | Section 2(1)(ল) | Defines `সাইবার সুরক্ষা` as protection of digital devices, computers, smartphones, wearables, computer systems, data, signaling data, traffic data, data centers, cloud, software, APIs, algorithms, AI tools, portals and networks, including proper authorized access by persons and AI agents/tools. It also includes citizens' continuous internet access. |
| Section 2 | `সংজ্ঞা` | Section 2(1)(শ) | Defines `সাইবার স্পেস` as the physical and virtual environment of interconnected digital devices and networks, including internet, telecom, computer networks, blockchain, machine learning and AI networks, social media, IoT, cloud, and AI-generated data. |
| Section 2 | `সংজ্ঞা` | Section 2(1)(ফ) | Defines `বে-আইনি প্রবেশ` as access without permission, or beyond permission, to a computer, digital device, digital network or digital information system, including blocking data exchange, disrupting processing, changing data, collecting data, removing cache/logs/traces/records, transferring or blocking data. It is also described as intrusion or hacking. |
| Section 4 | `আইনের অতিরাষ্ট্রিক প্রয়োগ` | Section 4(1)-(3) | Gives the Act extraterritorial effect: Bangladeshi citizens committing covered offences abroad can be treated as if the offence occurred in Bangladesh; persons outside Bangladesh using computers, systems, networks or devices located in Bangladesh can be proceeded against under the Act; and offences from Bangladesh affecting systems outside Bangladesh can also be covered. |
| Section 8 | `কতিপয় তথ্য-উপাত্ত অপসারণ বা ব্লক করিবার ক্ষমতা` | Section 8(1)-(5) | Allows the Director General to take steps to remove, transfer or block digital/electronic data that threatens cyber security. Law enforcement may seek removal/blocking where data threatens integrity, security, defence or public order, or promotes religious/communal/ethnic hate causing violence, alarm, disorder or criminal instructions. BTRC/ICT Division bodies may request technology companies. Tribunal permission must be obtained within 3 days, otherwise the blocked/removed data must be released again. |
| Section 15 | `গুরুত্বপূর্ণ তথ্য পরিকাঠামো` | Section 15 | Allows the Government, by gazette notification, to declare any computer system, network or information infrastructure as Critical Information Infrastructure and requires at least annual updating of that list. |
| Section 16 | `গুরুত্বপূর্ণ তথ্য পরিকাঠামোর নিরাপত্তা পরিবীক্ষণ, পরিদর্শন ও নিরীক্ষা` | Section 16(1)-(6) | Empowers monitoring, inspection and audit of Critical Information Infrastructure; requires annual internal/external audit reports; permits inquiry where activities appear threatening to CII; and requires expert-led cyber security monitoring/audits. |
| Section 17 | `গুরুত্বপূর্ণ তথ্য পরিকাঠামোতে বে-আইনি প্রবেশ বা হ্যাকিং, ইত্যাদির দণ্ড` | Section 17(1)(ক)-(খ), 17(2)(ক)-(খ) | Makes it an offence for a person, software developer or AI tool user to intentionally/knowingly unlawfully access CII, or through such access steal, destroy, cancel, alter or reduce the value/utility of data, generate new data through an AI agent, damage systems, or hide/destroy/alter source code. Punishment: up to 5 years and/or Tk 50 lakh for unlawful access; up to 7 years and/or Tk 1 crore for the data/system/source-code harms. |
| Section 18 | `কম্পিউটার, ডিজিটাল ডিভাইস, কম্পিউটার সিস্টেম ইত্যাদিতে বে-আইনি প্রবেশ ও দণ্ড` | Section 18(1)(ক)-(গ), 18(2)(ক)-(গ) | Criminalizes unlawful access to computers, digital devices, systems or networks; access for committing an offence; and hacking that steals, destroys, cancels, alters or reduces data value/utility, including by generating new data through an AI agent. Punishment ranges from up to 1 year/Tk 10 lakh to up to 5 years/Tk 50 lakh depending on the clause. |
| Section 19 | `কম্পিউটার, কম্পিউটার সিস্টেম ও সাইবার স্পেসের ভৌত অবকাঠামো ইত্যাদির ক্ষতিসাধন ও দণ্ড` | Section 19(1)(ক)-(চ), 19(2) | Covers unauthorized extraction/copying of data; intentional insertion or attempted insertion of malware; damaging or attempting to damage computer systems, networks, cyber-space physical infrastructure, data or programs; blocking lawful access; sending phishing or ransomware mail; and manipulating systems so another person's service or charges are misallocated. Punishment: up to 5 years and/or Tk 50 lakh. |
| Section 21 | `সাইবার স্পেসে জালিয়াতির অপরাধ ও দণ্ড` | Section 21(1)-(2), Explanation | Criminalizes cyber-space fraud. The explanation includes unauthorized or excessive use by a person or AI agent to create, change, delete, hide or manipulate inputs/outputs, data, programs, digital documents, electronic files, digital money/e-currency/cryptocurrency, mobile banking using another person's NID-registered SIM, hundi activity or gambling portals. Punishment: up to 2 years and/or Tk 20 lakh. |
| Section 22 | `সাইবার স্পেসে প্রতারণার অপরাধ ও দণ্ড` | Section 22(1)-(2), Explanation | Criminalizes deception through cyberspace. It includes knowingly or intentionally changing, deleting, adding to or distorting information in computer programs, systems, networks, digital devices, e-commerce or social media to reduce value/utility, seek financial/other advantage, cause loss or use trickery. Punishment: up to 5 years and/or Tk 50 lakh. |
| Section 23 | `সাইবার সন্ত্রাসী কার্য সংঘটনের অপরাধ ও দণ্ড` | Section 23(1)(ক)-(ঙ), 23(2) | Defines cyber terrorism as acts endangering state integrity, security or sovereignty and causing fear through unlawful access or blocking lawful access; malware or harmful changes causing death/grievous injury risk; attacking servers/systems to disrupt essential goods/services or CII; accessing protected data in ways prejudicial to foreign relations/public order; and using concealed or assumed identity or distorted NID/personal data to commit those acts. Punishment: up to 10 years and/or Tk 1 crore. |
| Section 24 | `আইনানুগ কর্তৃত্ব বহির্ভূত ই-ট্রানজেকশনের অপরাধ ও দণ্ড` | Section 24(1)(ক)-(খ), 24(2), Explanation | Criminalizes unauthorized e-transactions through digital/electronic means from banks, insurance, financial institutions or mobile financial service providers, and e-transactions declared illegal by the Government or Bangladesh Bank. Punishment: up to 1 year and Tk 10 lakh. |
| Section 27 | `অপরাধ সংঘটনে সহায়তা ও উহার দণ্ড` | Section 27(1)-(2) | Makes assistance in committing any offence under the Act a separate offence, punishable with the same penalty as the main offence. |
| Section 35 | `বেআইনি প্রবেশ বা অনুপ্রবেশ বা হ্যাকিং এর ক্ষেত্রে পরোয়ানা ব্যতিরেকে তল্লাশি, জব্দ ও গ্রেফতার` | Section 35(1)-(3) | In urgent hacking/unlawful access cases involving CII or systems where evidence may be deleted, changed, destroyed or become unavailable, police may record reasons and search, seize and arrest without warrant, subject to reporting and production before a magistrate/tribunal within constitutional time limits. |
| Section 38 | `তদন্তে সহায়তা` | Section 38 | Requires persons, entities or service providers to provide information and necessary assistance when requested by an investigating officer during investigations under the Act. |
| Section 46 | `অপরাধের আমলযোগ্যতা, জামিনযোগ্যতা ও আপোসযোগ্যতা ইত্যাদি` | Section 46(1)-(3) | Classifies offences: Sections 17, 18(1)(গ), 19, 20, 21, 22, 23 and 25 are cognizable; Sections 17, 18(1)(গ), 19, 22 and 23 are non-bailable; Sections 18(1)(ক)-(খ), 20, 21, 24, 25 and 26 are bailable; Sections 18(1)(ক)-(খ), 19, 21, 22, 24 and 25 are compoundable with court consent. |
| Section 47 | `বাজেয়াপ্তি` | Section 47(1)-(4), Explanation | Cyber tools or objects used in or connected with offences may be confiscated by tribunal order, subject to protections where the possessor/controller was not responsible. The explanation includes computers, computer systems, disks, compact discs, tape drives and related computer equipment as cyber tools. |
| Section 48 | `আঞ্চলিক ও আন্তর্জাতিক সহযোগিতা` | Section 48(1)-(4) | Applies Bangladesh's Mutual Legal Assistance in Criminal Matters Act, 2012 where regional or international cooperation is needed for investigation and trial of offences under the Act. It also makes the National Cyber Security Agency the competent authority for CII-related regional/international cyber security coordination. |

### Information and Communication Technology Act, 2006

Many cybercrime offences in the ICT Act have effectively been superseded for current cyber offences by later cyber statutes, but the ICT Act remains important because it provides the definitions and the Cyber Tribunal / Cyber Appellate Tribunal framework that the Cyber Security Act, 2026 references for its own tribunal structure (see Section 2(1)(ক) and 2(1)(ঠ) of the 2026 Act).

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 46 | `Power to give directions in emergency` | Section 46(1)-(2) | Allows the Controller, for reasons recorded in writing and in the interest of sovereignty, integrity, security, friendly foreign relations, public order, or preventing incitement to cognizable offences, to direct a Government agency to intercept information transmitted through a computer resource. Persons in charge of the resource must provide facilities and technical assistance for decryption. |
| Section 47 | `Power to announce protected systems` | Section 47(1)-(2) | Allows the Controller to declare any computer, computer system, or computer network a protected system by Gazette notification, and to authorize persons who may access such systems. |
| Section 54 | `Penalty for damage to computer, computer system, etc.` | Section 54(1)(a)-(i), 54(2) | Criminalizes unauthorized access, data downloading/copying/extraction, introducing computer contaminant/virus, damaging data/programs, disrupting systems, denial of authorized access, helping unauthorized access, spam, and manipulation of charges to another person's account. Punishment: up to 10 years / BDT 10 lakh. |
| Section 55 | `Punishment for tampering with computer source code` | Section 55(1)-(2) | Criminalizes intentional/knowing concealment, destruction, or alteration of computer source code required to be kept by law. Punishment: up to 3 years / BDT 3 lakh. |
| Section 56 | `Punishment for hacking with computer system` | Section 56(1)(a)-(b), 56(2) | Criminalizes acts intended or likely to cause wrongful loss or damage by destroying, deleting, altering, diminishing value/utility of information, or causing damage through illegal access to computer/network/electronic systems. Punishment: up to 10 years / BDT 1 crore. |
| Section 57 | `Punishment for publishing fake, obscene or defaming information in electronic form` | Section 57(1)-(2) | Criminalizes deliberate publication/transmission in website/electronic form of fake and obscene material, or material tending to deprave/corrupt readers/viewers/listeners, deteriorate law and order, prejudice the image of the State or a person, hurt religious belief, or instigate against a person/organization. Punishment: up to 10 years / BDT 1 crore. *(Status caution: historically important, but overlapping speech/cyber offences were later replaced or repealed by the Digital Security Act, Cyber Security Act, and Cyber Security Act, 2026 framework.)* |
| Section 63 | `Punishment for disclosure of confidentiality and privacy` | Section 63(1)-(2) | Criminalizes disclosure, without consent, of electronic records, correspondence, information, documents, or materials accessed under powers conferred by the Act/rules/regulations. Punishment: up to 2 years / BDT 2 lakh. |
| Section 66 | `Punishment for using computer for committing an offence` | Section 66(1)-(2) | Criminalizes knowingly assisting offences under the ICT Act using a computer, email, computer network, resource, or system; punishment follows the main offence. |
| Section 68 | `Establishment of Cyber Tribunal` | Section 68(1)-(6) | Provides for one or more Cyber Tribunals for speedy and effective trial of offences under the ICT Act. The 2026 Cyber Security Act defines its Tribunal by reference to this ICT Act section. |
| Section 82 | `Establishment of Cyber Appellate Tribunal` | Section 82 | Provides for the Cyber Appellate Tribunal. The 2026 Cyber Security Act defines its Appeal Tribunal by reference to this ICT Act section. |

## Cyberbullying, Online Harassment, Threats, And Defamation

Bangladesh law does not use a single universal label of "cyberbullying" in the current Cyber Security Act, but the conduct is covered through provisions on sexual harassment, blackmail, revenge porn, sextortion, hate speech, threats, defamation, intimidation and insults to a woman's modesty.

### Cyber Security Act, 2026

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 2 | `সংজ্ঞা` | Section 2(1)(য)(অ)-(ই) | Defines `যৌন হয়রানি` in cyberspace to include repeatedly asking for nude images; abusing administrative or professional power to propose unlawful sexual relations online; sending unwanted genital/sexual/pornographic material; converting or sexualizing a person's image into pornographic material using technology without consent; and threatening, enticing or trying to establish sexual relations because a relationship proposal was rejected. |
| Section 25 | `যৌন হয়রানি, ব্ল্যাকমেইলিং বা অশ্লীল বিষয়বস্তু প্রকাশ সংক্রান্ত অপরাধ ও দণ্ড` | Section 25(1) | Criminalizes intentionally/knowingly sending, publishing, broadcasting or threatening to send/publish/broadcast harmful or intimidating data, video, audiovisual image, still image, graphics or other captured/edited/AI-created/AI-edited displayable data through a website or digital/electronic medium for blackmailing, sexual harassment, revenge porn, child sexual abuse material or sextortion. |
| Section 25 | same title | Section 25(2) | General punishment for Section 25(1): up to 2 years imprisonment and/or Tk 10 lakh fine. |
| Section 25 | same title | Section 25(3) | Enhanced punishment where the Section 25(1) offence is committed against a woman or a child under 18: up to 5 years imprisonment and/or Tk 20 lakh fine. |
| Section 25 | same title | Explanation | Defines blackmailing as threats/intimidation by which a person forces another, through fear of exposing confidential information or causing harm, to provide unlawful advantage/service or perform a demanded act. |
| Section 26 | `সাইবার স্পেসে ধর্মীয় বা জাতিগত বিষয়ে সহিংসতা, ঘৃণা ও বিদ্বেষমূলক তথ্য প্রকাশ ইত্যাদির অপরাধ ও দণ্ড` | Section 26(1)-(2) | Criminalizes intentional/knowing publication or causing publication in cyberspace, including under pseudonym or by unlawful access to one's own or another's ID, of religious/communal hate or ethnic-hatred speech that creates violence, alarm, disorder or directs criminal activity. Punishment: up to 2 years and/or Tk 10 lakh. |
| Section 27 | `অপরাধ সংঘটনে সহায়তা ও উহার দণ্ড` | Section 27(1)-(2) | Assistance in harassment, blackmail, hate-speech or other offences under the Act is punishable the same as the underlying offence. |

### Penal Code, 1860

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 499 | `Defamation` | Section 499, Explanations 1-4 | Covers spoken or written words, signs or visible representations that make/publish imputations about a person intending, knowing, or having reason to believe they will harm reputation. This can be relevant to reputational cyberbullying, false online accusations, edited images or posts harming reputation. |
| Section 500 | `Punishment for defamation` | Section 500 | Punishes defamation with simple imprisonment up to 2 years, or fine, or both. |
| Section 503 | `Criminal intimidation` | Section 503 | Covers threats of injury to person, reputation or property, or to the person/reputation of someone the victim is interested in, intended to alarm the victim or force them to do/omit an act. This fits online threats, blackmail-style reputational threats and coercive messaging. |
| Section 506 | `Punishment for criminal intimidation` | Section 506 | Punishes criminal intimidation with imprisonment up to 2 years, or fine, or both. |
| Section 507 | `Criminal intimidation by an anonymous communication` | Section 507 | Adds punishment where criminal intimidation is made anonymously or with steps taken to conceal the sender's identity or abode. Relevant to anonymous online threats, pseudonymous accounts, and masked-identity harassment. |
| Section 509 | `Word, gesture or act intended to insult the modesty of a woman` | Section 509 | Covers words, sounds, gestures or exhibited objects intended to be heard/seen by a woman, or intrusion upon her privacy, intended to insult her modesty. Punishment: simple imprisonment up to 1 year, or fine, or both. Relevant to sexually insulting messages, images, gestures or privacy intrusion. |

## Women's Online Safety, Sexual Image Abuse, Revenge Porn, And Victim Identity

### Cyber Security Act, 2026

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 2 | `সংজ্ঞা` | Section 2(1)(থ)(অ)-(ই) | Defines `ডিজিটাল শিশু যৌন নিপীড়ন সংক্রান্ত উপাদান` as digital/electronic material or representation involving a child and explicit or simulated sexual activity, sexual organs, sexual exploitation/abuse, sexual service, sexual contact, inducement, encouragement, threats or instructions to involve a child in sexual activity or exploitation. The definition states that whether the material was made for sexual arousal/gratification is irrelevant, but lawful law-enforcement, medical, research, education or media-reporting uses are excluded. |
| Section 2 | `সংজ্ঞা` | Section 2(1)(য)(অ)-(ই) | Defines cyber sexual harassment, including repeated requests for nude images, abuse of power for online sexual proposals, unwanted sexual/pornographic content, technological conversion/sexualization of a person's image into pornographic material without consent, and threats or coercion after rejecting a relationship proposal. |
| Section 2 | `সংজ্ঞা` | Section 2(1)(র) | Defines `রিভেঞ্জ পর্ণ` as spreading a person's intimate/private image, video or similar data using any technology without consent and with intent to harm. |
| Section 2 | `সংজ্ঞা` | Section 2(1)(ড়) | Defines `সেক্সটর্শন` as fraud/extortion by claiming to possess or storing intimate/private images or videos and threatening publication to obtain money, advantage or physical relations. |
| Section 25 | `যৌন হয়রানি, ব্ল্যাকমেইলিং বা অশ্লীল বিষয়বস্তু প্রকাশ সংক্রান্ত অপরাধ ও দণ্ড` | Section 25(1)-(3), Explanation | Main cyber sexual-image abuse provision: covers blackmail, sexual harassment, revenge porn, digital child sexual abuse material and sextortion via website/digital/electronic media, including content captured, edited, AI-created or AI-edited. Punishment increases to up to 5 years/Tk 20 lakh when committed against a woman or child under 18. |

### Pornography Control Act, 2012

Source Act: **Pornography Control Act, 2012** (`পর্নোগ্রাফি নিয়ন্ত্রণ আইন, ২০১২`, Act No. 9 of 2012)

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 2 | `সংজ্ঞা` | Section 2(গ)(১)-(৩) | Defines pornography as sexually exciting obscene dialogue, acting, gestures, nude/semi-nude dance captured/displayable by film, video, audiovisual image, still image, graphics or other means without artistic/educational value; sexually exciting obscene books, magazines, sculptures, idols, cartoons or leaflets; and negatives/soft versions of those materials. |
| Section 2 | `সংজ্ঞা` | Section 2(ঘ) | Defines `পর্নোগ্রাফি সরঞ্জাম` as cameras, computers/components, CD/VCD/DVD, optical/magnetic devices, mobile phones/components, and any electronic, digital or technology-based device used to produce, store, capture or display pornography. |
| Section 4 | `পর্নোগ্রাফি সংরক্ষণ ও বাজারজাতকরণ ইত্যাদি নিষিদ্ধ` | Section 4 | Prohibits producing, storing, marketing, carrying, supplying, purchasing, selling, possessing/capturing or displaying pornography. |
| Section 6 | `তল্লাশী, জব্দ ইত্যাদি` | Section 6(1)-(3) | Allows authorized search and seizure; states that seized soft copies, hard-copy conversions, CDs, computers/devices/accessories, phones, electronic data/memory and information preserved by BTRC, mobile operators, ISPs, VoIP providers or authorized bodies may be used as evidence. |
| Section 8 | `দণ্ড` | Section 8(1) | Punishes producing pornography; arranging participants by contract; forcing women, men or children to participate; or inducing participation and capturing still/video/film knowingly or unknowingly. Penalty: up to 7 years rigorous imprisonment and Tk 2 lakh fine. |
| Section 8 | `দণ্ড` | Section 8(2) | Punishes harming social or personal dignity through pornography, extorting money/advantage by intimidation, or mentally torturing a person through pornography captured knowingly or unknowingly. Penalty: up to 5 years rigorous imprisonment and Tk 2 lakh fine. |
| Section 8 | `দণ্ড` | Section 8(3) | Punishes supplying pornography through internet, website, mobile phone or any other electronic device. Penalty: up to 5 years rigorous imprisonment and Tk 2 lakh fine. |
| Section 8 | `দণ্ড` | Section 8(4)-(5) | Punishes public nuisance by displaying pornography and acts such as selling, renting, distributing, supplying, publicly displaying, advertising, preparing, producing, transporting or storing pornography for those purposes. |
| Section 8 | `দণ্ড` | Section 8(6) | Punishes producing, distributing, printing, publishing, selling, supplying, displaying or advertising child pornography by using a child. Penalty: up to 10 years rigorous imprisonment and Tk 5 lakh fine. |
| Section 8 | `দণ্ড` | Section 8(7) | Direct involvement or assistance in the Section 8 offences is punishable with the same penalty. |
| Section 10 | `অপরাধের আমলযোগ্যতা` | Section 10 | Offences under the Act are cognizable and non-bailable. |
| Section 13 | `মিথ্যা মামলা, অভিযোগ দায়ের ইত্যাদির দণ্ড` | Section 13(1)-(2) | Penalizes false or harassing cases/complaints under the Act by an authorized person or complainant where the accusation is found false, baseless and harassing. |

### Nari o Shishu Nirjatan Daman Ain, 2000

Source Act: **Nari o Shishu Nirjatan Daman Ain, 2000** (`নারী ও শিশু নির্যাতন দমন আইন, ২০০০`, Act No. 8 of 2000), as reflected in BDLaws with 2026 amendments.

These provisions are not all cyber-specific, but they are relevant where online abuse escalates into sexual violence, sexual coercion, or disclosure of victim identity online.

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 9 | `ধর্ষণ, ধর্ষণজনিত কারণে মৃত্যু, ইত্যাদির শাস্তি` | Section 9(1), Explanation | Punishes rape of a woman or child with death penalty or life rigorous imprisonment plus fine. The explanation covers sexual intercourse outside marriage with a woman over 16 without consent, by intimidation, or by fraudulently obtained consent; and sexual intercourse with a child under 16 with or without consent. It also includes `বলাৎকার` within rape. |
| Section 9 | same title | Section 9(2)-(5) | Provides aggravated punishments where rape causes death, is committed by a group, involves attempted rape causing death/injury, involves grievous hurt to sexual organs/breasts for rape, or occurs in police/force custody. |
| Section 9A | `নারীর আত্মহত্যায় প্ররোচনা, ইত্যাদির শাস্তি` | Section 9A | If a woman dies by suicide directly because her modesty was outraged by a person's intentional act against her consent or will, that person is guilty of abetment of suicide. Punishment: rigorous imprisonment up to 10 years with a minimum of 5 years, plus fine. *(May be relevant to severe online sexual humiliation, non-consensual intimate image distribution, or cyber harassment that directly causes the suicide and all elements are proven.)* |
| Section 10 | `যৌন পীড়ন, ইত্যাদির দণ্ড` | Section 10 | Punishes sexual oppression/sexual assault where a person unlawfully, to satisfy sexual desire, touches the sexual organ or any other organ of a woman or child using any body part or object, or outrages the modesty of a woman. Penalty: rigorous imprisonment up to 10 years, minimum 3 years, plus fine. |
| Section 14 | `সংবাদ মাধ্যমে নির্যাতনের শিকার নারী ও শিশুর পরিচয় প্রকাশের ব্যাপারে বাধা-নিষেধ` | Section 14(1)-(2) | Prohibits publishing or broadcasting news, information, name/address, image or other identifying information about a woman or child victim of an offence under the Act in newspapers, other media, online, or social media in a way that reveals identity. Violation is punishable with up to 2 years imprisonment or up to Tk 1 lakh fine, or both. |

### Penal Code, 1860

The Penal Code provisions below are not online-specific, but are relevant where online conduct involves obscene content, insult to modesty, or assault connected to cyber harassment.

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 292 | `Sale, etc., of obscene books, etc.` | Section 292(a)-(e), Exception | Criminalizes selling, distributing, publicly exhibiting, circulating, producing, possessing for circulation, importing/exporting/conveying, profiting from, advertising, offering, or attempting acts involving obscene books, papers, drawings, representations, figures, or other obscene objects. Contains a religious-purpose exception. Online transmission of obscene material through websites, social media, or messaging apps is potentially covered. |
| Section 293 | `Sale, etc., of obscene objects to young person` | Section 293 | Criminalizes selling, renting, distributing, exhibiting, or circulating obscene objects to a person under 20, or offering/attempting to do so. Relevant to sharing obscene/sexual content with minors online. |
| Section 354 | `Assault or criminal force to woman with intent to outrage her modesty` | Section 354 | Criminalizes assault or use of criminal force against a woman intending to outrage, or knowing it likely to outrage, her modesty. Not online-specific, but relevant if offline acts are connected to online harassment or cyber-stalking that escalates to physical contact. |

## AI Abuse, Deepfakes, Impersonation, And Synthetic Content

The current Cyber Security Act, 2026 does not rely only on the English label "deepfake"; it uses conduct-based language. It expressly covers AI technology, AI tools, AI agents, AI-generated data, AI-created/AI-edited displayable data, and technological conversion/sexualization of images.

### Cyber Security Act, 2026

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 2 | `সংজ্ঞা` | Section 2(1)(ঢ), 2(1)(শ) | Brings AI technology, large language models, machine vision, machine learning/AI networks and AI-generated data within `digital` and `cyber space`. This creates the basic statutory hook for AI-enabled online abuse. |
| Section 2 | `সংজ্ঞা` | Section 2(1)(য)(আ) | Treats it as cyber sexual harassment to convert or sexualize a person's image into pornographic material using technology without consent. This is directly relevant to sexual deepfakes. |
| Section 25 | `যৌন হয়রানি, ব্ল্যাকমেইলিং বা অশ্লীল বিষয়বস্তু প্রকাশ সংক্রান্ত অপরাধ ও দণ্ড` | Section 25(1)-(3) | Expressly covers data, video, audiovisual image, still image, graphics or other displayable information that is captured, edited, **AI-created** or **AI-edited**, when sent/published/broadcast or threatened for blackmail, sexual harassment, revenge porn, child sexual abuse material or sextortion. Enhanced punishment applies when the victim is a woman or child under 18. |
| Section 17 | `গুরুত্বপূর্ণ তথ্য পরিকাঠামোতে বে-আইনি প্রবেশ বা হ্যাকিং, ইত্যাদির দণ্ড` | Section 17(1)(খ) | Covers CII abuse where unlawful access is used to steal/destroy/alter data, reduce its value/utility, or generate new data by an AI agent, including source-code concealment, destruction or alteration. |
| Section 18 | `কম্পিউটার, ডিজিটাল ডিভাইস, কম্পিউটার সিস্টেম ইত্যাদিতে বে-আইনি প্রবেশ ও দণ্ড` | Section 18(1)(গ) | Covers hacking/unlawful access that steals, destroys, cancels, alters or reduces data value/utility, including generating new data through an AI agent. |
| Section 21 | `সাইবার স্পেসে জালিয়াতির অপরাধ ও দণ্ড` | Section 21 Explanation | Includes fraud by a person or AI agent through unauthorized or excessive cyber-space use to create, change, delete, hide or manipulate inputs/outputs, data, programs, information systems, digital documents, electronic files, digital money/e-currency/cryptocurrency or identity-linked financial activity. |
| Section 22 | `সাইবার স্পেসে প্রতারণার অপরাধ ও দণ্ড` | Section 22 Explanation | Covers deception by changing, deleting, adding or distorting data on computer systems, digital networks, e-commerce or social media to reduce utility/value, obtain advantage or cause loss. This can apply to manipulated online profiles, synthetic posts, altered data or AI-assisted deception. |
| Section 23 | `সাইবার সন্ত্রাসী কার্য সংঘটনের অপরাধ ও দণ্ড` | Section 23(1)(ঙ) | Covers concealing one's identity, assuming another person's identity, distorting someone's national ID or presenting another person's personal information as one's own when committing the cyber-terrorism acts in Section 23(1)(ক)-(ঘ). |

### Penal Code, 1860

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 463 | `Forgery` | Section 463 | Defines forgery as making a false document or part of a document intending to cause damage/injury, support a claim/title, cause someone to part with property or enter a contract, or commit/enable fraud. Relevant to fake documents, fabricated credentials and some synthetic identity materials. |
| Section 464 | `Making a false document` | Section 464 | Explains how a false document is made: dishonestly/fraudulently making/signing/sealing/executing a document as if authorized by someone else; materially altering a document without lawful authority; or causing someone unable/deceived to sign/alter a document. |
| Section 465 | `Punishment for forgery` | Section 465 | Punishes forgery with imprisonment up to 2 years, or fine, or both. |
| Section 469 | `Forgery for purpose of harming reputation` | Section 469 | Punishes forgery intended to harm a party's reputation, or known likely to be used for that purpose, with imprisonment up to 3 years and fine. Relevant to fake reputational materials, manipulated evidence or forged media-like records used to damage reputation. |

## Plagiarism, AI-Copied Content, And Copyright Abuse

Source Act: **Copyright Act, 2023** (`কপিরাইট আইন, ২০২৩`, Act No. 34 of 2023)

Bangladesh copyright law generally frames plagiarism-type conduct as copyright infringement, false authorship/attribution, unauthorized publication/performance, use beyond assigned rights, or infringement of information-technology based digital works. It does not need to use the English word "plagiarism" for the conduct to be legally relevant.

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 2 | `সংজ্ঞা` | Section 2(2) | Defines `অনুলিপি` as reproduction of a work using letters, images, sound or another medium, including written, sound recording, film, graphics or digital signal form, whether still/moving, two-dimensional, three-dimensional or virtual. |
| Section 2 | `সংজ্ঞা` | Section 2(3) | Defines copying devices/techniques as mechanical or digital methods or any other process used or usable for making/reproducing copies of a work. |
| Section 2 | `সংজ্ঞা` | Section 2(7)(খ) | For information-technology based digital works, copyright includes the acts listed for literary/dramatic/musical works plus rights relating to copies of digital works, including sale/rent and other exploitation. |
| Section 2 | `সংজ্ঞা` | Section 2(8) | Defines `কপিরাইট লঙ্ঘনমূলক অনুলিপি` as an infringing copy made by someone other than the lawful copyright/related-rights owner, depending on the type of work. |
| Section 2 | `সংজ্ঞা` | Section 2(10) | Defines `তথ্য প্রযুক্তি-ভিত্তিক ডিজিটাল কর্ম` as creative works created/used directly or indirectly in computers, mobile phones or digital devices by processing information/data for a specific result; includes data, source code, tables, charts, graphs, sound, images, moving images, designs, text, instructions, signals and usage instructions. |
| Section 14 | `কপিরাইট থাকে এইরূপ কর্ম` | Section 14(1)(ক)-(ঙ) | States copyright exists in literary, dramatic, musical, folklore/folk culture works; information technology-based digital works; artistic works; films; and sound recordings. |
| Section 14 | same title | Section 14(6) | Removes protection where, for example, the main part of a film is made by infringing another work's copyright, or a sound recording infringes the underlying literary/dramatic/musical work during recording. |
| Section 15 | `কপিরাইটের প্রথম স্বত্বাধিকারী` | Section 15(1)-(2) | Establishes the author as first copyright owner, subject to exceptions for employment, commissioned work, government work, international organizations and information-technology based digital works where the commissioning employer/person/institution may be first owner unless otherwise agreed. |
| Section 16 | `কপিরাইটের স্বত্ব নিয়োগ` | Section 16(1) | Allows assignment of existing or future copyright, wholly or partly, generally or conditionally, for full or partial term. Relevant to disputes where copied/AI-used content is claimed to have been licensed or assigned. |
| Section 69 | `কপিরাইট লঙ্ঘন, ইত্যাদি` | Section 69(1)-(2), Explanation | Defines copyright infringement: doing acts reserved to the copyright owner without licence or beyond licence; permitting infringing public performance for profit; selling/renting/offering/displaying/distributing infringing copies commercially; importing infringing copies; and intentionally/knowingly changing, deleting, adding or distorting information in computer programs, systems, networks, digital devices, digital systems, digital networks or social media to reduce value/utility. |
| Section 70 | `কতিপয় কার্য যাহাতে কপিরাইট লঙ্ঘন হইবে না` | Section 70(1)-(2) | Provides exceptions/non-infringing uses subject to prescribed purposes and conditions, including certain reproduction, adaptation, recording, broadcast, display, publication, fair use and translations, plus accessible-format uses for visually impaired persons on non-commercial terms. |
| Section 80 | `অধিকার লঙ্ঘনকারী অনুলিপির দখলকার বা লেনদেনকারী ব্যক্তির বিরুদ্ধে মালিকের অধিকার` | Section 80 | Treats infringing copies and plates/tools used to make them, including source-code compilation, data, design documentation, tables and charts for computer programs, as the copyright owner's property, allowing civil recovery/conversion actions. |
| Section 82 | `সেবা প্রদানকারী ব্যক্তি বা প্রতিষ্ঠানের দায়বদ্ধতা` | Section 82(1)-(2), Explanation | If a work is infringed through a network service provider or third party, the author/lawful licensee may object in writing; the service provider/person/platform must remove all copies under its control and notify the complainant, or it may be liable for copyright infringement. Commercial use requires licensing from the Bangladesh Copyright Office. |
| Section 96 | `কপিরাইটের স্বত্বাধিকারী না হইয়া উহার প্রকাশ, পরিবেশন বা সম্পাদন করিবার দণ্ড` | Section 96 | Publishing, performing or executing a work without being its copyright owner is an offence punishable by fine up to Tk 5 lakh. |
| Section 97 | `স্বত্বাধিকারী না হইয়া বা যে পরিমাণ স্বত্ব প্রদান করা হইয়াছে উহার অতিরিক্ত স্বত্বের মালিকানা প্রয়োগের জন্য দণ্ড` | Section 97 | Exercising ownership over a work without being owner/assignee, or beyond the rights granted, is an offence punishable by fine up to Tk 5 lakh. |
| Section 100 | `তথ্য প্রযুক্তি-ভিত্তিক ডিজিটাল কর্ম লঙ্ঘন করিবার জন্য দণ্ড` | Section 100 | Infringing an information-technology based digital work and using, publishing, selling or distributing copies by any medium is an offence punishable by up to 4 years imprisonment and Tk 4 lakh fine. If not for business/commercial profit, minimum punishment is 3 months imprisonment or Tk 25,000 fine. |
| Section 101 | `কপিরাইট রেজিস্টারে মিথ্যা তথ্য সন্নিবেশ ইত্যাদি করিবার জন্য দণ্ড` | Section 101(ক)-(গ) | Penalizes false entries in the copyright register, false copies of register entries, or knowingly presenting false entries/writings as evidence. Punishment: 2 years imprisonment or Tk 2 lakh fine, or both. |
| Section 103 | `প্রণেতা কর্তৃক মিথ্যা কর্তৃত্ব আরোপ করিবার জন্য দণ্ড` | Section 103(ক)-(গ) | Penalizes false attribution: placing or attaching a non-author's name to a work/copy as if that person authored it; publishing/selling/renting/displaying works with false author/publisher attribution; distributing or performing/broadcasting works as the work of a person known not to be the author. Punishment: up to 3 years imprisonment or Tk 5 lakh fine, or both. |
| Section 104 | `শব্দধ্বনি রেকর্ডিং, ভিডিও চিত্র ও ডিজিটাল কর্মে অন্তর্ভুক্তিযোগ্য তথ্যাদি অন্তর্ভুক্ত না করিবার জন্য দণ্ড` | Section 104 | Publishing a sound recording, video image or digital work without required prescribed information is an offence punishable by up to 5 years imprisonment or Tk 5 lakh fine, or both. |
| Section 105 | `অধিকার লঙ্ঘনকারী অনুলিপি দখলে রাখিবার দণ্ড` | Section 105 | Knowingly making or possessing plates, soft copies, digital copies or similar copies for creating infringing copies, or causing unauthorized public performance for personal gain, is punishable by up to 2 years imprisonment or Tk 2 lakh fine, or both. |
| Section 111 | `অপরাধ বিচারার্থে গ্রহণ, ইত্যাদি` | Section 111(1)-(2) | Offences in the chapter are triable by a Judicial Magistrate First Class; copyright-infringement offences are non-cognizable, compoundable and bailable. |
| Section 113 | `অধিকার লঙ্ঘনকারী অনুলিপি বা অধিকার লঙ্ঘনকারী অনুলিপি তৈরির উদ্দেশ্যে ব্যবহৃত প্লেট বা সফ্ট কপি বিলিবণ্টন` | Section 113 | During trial, whether or not the accused is convicted, the court may order infringing copies, plates, soft/digital copies or similar objects to be destroyed, delivered to the copyright owner, or otherwise disposed of as the court thinks fit. |

## Related Privacy And Data Protection Provisions

These provisions are relevant to doxxing, unauthorized processing of personal data, AI profiling, exposure of sensitive data and privacy harms that may accompany online abuse.

### Personal Data Protection Act, 2026

Source Act: **Personal Data Protection Act, 2026** (`ব্যক্তিগত উপাত্ত সুরক্ষা আইন, ২০২৬`, Act No. 63 of 2026)

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 5 | `ব্যক্তিগত উপাত্ত প্রক্রিয়াকরণের বৈধ ভিত্তি` | Section 5(1)-(3) | Personal data may be processed according to the Act and regulations, generally with consent. Consent must be voluntary, specific, clear and withdrawable, and the data subject must be informed about purpose, retention period, transfer and withdrawal process. |
| Section 7 | `সংবেদনশীল ব্যক্তিগত উপাত্ত প্রক্রিয়াকরণের শর্ত` | Section 7(ক)-(চ) | Sensitive personal data may be processed only under listed conditions, including specific consent, contract, employment/social protection law, medical/emergency health duties, legal duties, or where the data subject voluntarily made the data public. |
| Section 9 | `শিশু বা সম্মতি প্রদানে সক্ষম নহে এমন ব্যক্তিসম্পর্কিত ব্যক্তিগত উপাত্ত প্রক্রিয়াকরণ` | Section 9(1)-(3) | Processing personal data of a child or person unable to consent requires consent by parent/legal guardian/authorized decision-maker and must protect the child's/person's rights and interests. |
| Section 10 | `উপাত্তধারী কর্তৃক ব্যক্তিগত উপাত্তে অধিকার প্রয়োগের সাধারণ শর্তাবলি` | Section 10(1)-(4) | Provides the general process for a data subject to exercise rights by written application, with controller duties to acknowledge, evaluate sensitivity/fraud risk and preserve audit records. |
| Section 11 | `প্রবেশাধিকার ও বহনযোগ্যতার (portability) অধিকার` | Section 11(1)-(3) | Gives data subjects access to personal data processed by a controller, including copies and summaries in understandable format and possible direct transfer to another controller. |
| Section 12 | `উপাত্ত পরিমার্জন, হালনাগাদকরণ ও সম্পূর্ণকরণের অধিকার` | Section 12(1)-(2) | Gives data subjects the right to request correction of inaccurate/misleading data, completion of incomplete data and updating of outdated data; refusal requires written reasons. |
| Section 13 | `সম্মতি প্রত্যাহার, প্রক্রিয়াকরণে আপত্তি এবং ফলাফল` | Section 13(1)-(2) | Allows withdrawal of consent for storage, processing or automated decisions and requires deletion of personal data in listed cases, including where the purpose no longer exists or consent is withdrawn. |
| Section 32 | `উপাত্তধারীর অধিকার লঙ্ঘিত হইলে প্রশাসনিক জরিমানা` | Section 32(1)-(3) | Failure to comply with data-subject rights may lead to administrative fines up to Tk 25 lakh, or up to Tk 50 lakh for important data controllers, with additional fines for repeat violations. |
| Section 33 | `উপাত্তের যথাযথ সুরক্ষা ও নিরাপত্তা প্রদানে ব্যর্থতার প্রতিকার` | Section 33 | Failure to provide proper protection and security for personal data is treated as negligence in duty by a data controller/processor and may lead to administrative fine up to Tk 25 lakh. |

### National Data Management Act, 2026

Source Act: **National Data Management Act, 2026** (`জাতীয় উপাত্ত ব্যবস্থাপনা আইন, ২০২৬`, Act No. 80 of 2026)

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Section 3 | `আইনের প্রাধান্য` | Section 3 | Gives this Act priority over inconsistent laws/contracts/instruments for collection, storage, processing, security, identification, national data management and interoperability of personal data. |
| Section 31 | `রাষ্ট্রীয় গুরুত্বপূর্ণ/সংবেদনশীল উপাত্ত বিনিময়ের বিশেষ বিধান` | Section 31(1)-(2) | Identifies state-important/sensitive data, including data affecting sovereignty, public security, borders, emergency status, and government-declared public-order data, and allows the Government to regulate data interoperability/exchange with limits and conditions. |
| Section 34 | `সরকারি বা সংবিধিবদ্ধ সংস্থা বা প্রতিষ্ঠান কর্তৃক বিধান লঙ্ঘনের প্রতিকার` | Section 34(1)-(2) | If a government employee violates a data subject's rights during processing, storage, holding, transfer, publication or transmission of personal data, it may be treated as misconduct and departmental proceedings may be initiated. |
| Section 42 | `এই আইনের বিধান লঙ্ঘনের জন্য অভিযোগ দায়ের ও প্রশাসনিক জরিমানা` | Section 42(1)-(2) | A data subject may complain to the authority if rights are violated; persons or institutions violating provisions related to covered personal data or interoperability may face administrative fine up to Tk 25 lakh. |

## Legacy And Procedural Notes

| Provision | Official Section Title | Clause Number | What The Provision Covers |
|---|---|---|---|
| Cyber Security Act, 2026, Section 50 | `২০২৩ সনের ৩৯ নং আইনের রহিতকরণ ও হেফাজত` | Section 50(1)-(6) | Repeals the Cyber Security Act, 2023. It preserves certain pending cases under specified sections, but cancels/terminates proceedings under other listed 2023 Act sections and certain repealed Digital Security Act, 2018 sections. |
| Cyber Security Act, 2026, Section 51 | `রহিতকরণ ও হেফাজত` | Section 51(1)-(2) | Repeals the Cyber Security Ordinance, 2025 and Cyber Security (Amendment) Ordinance, 2025, while deeming actions/measures/proceedings under those ordinances to have been taken under the 2026 Act. |
| Cyber Security Act, 2026, Section 2 | `সংজ্ঞা` | Section 2(1)(ক), 2(1)(ঠ) | Defines the appellate tribunal and tribunal by reference to the ICT Act, 2006: the Cyber Appellate Tribunal under ICT Act Section 82 and the Cyber Tribunal under ICT Act Section 68. |

## Quick Category Map

| Concern | Most Direct Current Provisions |
|---|---|
| Digital safety / hacking / unauthorized access | Cyber Security Act, 2026 Sections 2, 4, 8, 15-19, 21-24, 35, 38, 46-48; ICT Act, 2006 Sections 46-47, 54-57, 63, 66, 68, 82 for tribunal/appellate framework |
| Cyberbullying / threats / reputational abuse | Cyber Security Act Sections 25-27; Penal Code Sections 499-500, 503-507, 509 |
| Women's online safety / sexual image abuse | Cyber Security Act Sections 2 and 25; Pornography Control Act Sections 2, 4, 6, 8, 10; Nari o Shishu Nirjatan Daman Ain Sections 9, 9A, 10, 14; Penal Code Sections 292-293, 354 |
| Deepfake / AI sexual abuse | Cyber Security Act Sections 2(1)(ঢ), 2(1)(য), 2(1)(শ), 25(1)-(3) |
| AI fraud / impersonation / manipulated data | Cyber Security Act Sections 17, 18, 21, 22, 23; Penal Code Sections 463-465, 469 |
| Plagiarism / AI-copied digital work | Copyright Act, 2023 Sections 2, 14-16, 69-70, 80, 82, 96-97, 100-105, 111, 113 |
| Doxxing / privacy / personal data misuse | Personal Data Protection Act, 2026 Sections 5, 7, 9-13, 32-33; National Data Management Act, 2026 Sections 3, 31, 34, 42 |
