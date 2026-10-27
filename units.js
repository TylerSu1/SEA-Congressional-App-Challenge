// Course content for the SEA scam-safety course.
// Generated from the research document. Edit the text here to change what the site shows.
// Shape: each unit has goals, sections (made of blocks), and a quiz.
// Block types: p (paragraph, optional bold lead), ul / ol (items are text or {lead, text}),
//              sub (small heading), quote, example ({title, quote?, steps[]}).

const COURSE = {
 "units": [
  {
   "number": 1,
   "title": "Smishing (Text Message Scams)",
   "goals": [
    "Explain what smishing is",
    "Name 6 common text scams",
    "Spot the warning signs in a scam text",
    "Know exactly what to do when you get one"
   ],
   "sections": [
    {
     "key": "what",
     "title": "What It Is",
     "blocks": [
      {
       "t": "p",
       "text": "The word smishing joins two ideas: SMS (short message service, the technology behind normal text messages) and phishing (tricking people into giving up private information). A smishing scam is any fake text message that tries to steal your money, your passwords, or your identity."
      },
      {
       "t": "p",
       "text": "Why do scammers use texts? There are three big reasons. First, texts are cheap and fast. A scammer can use software to send thousands of messages in minutes, and they only need a few people to answer. Second, people trust their phones. We think of texts as personal, and we often read them quickly while we are busy or tired. Third, scam texts are harder to filter than scam emails. Email programs have caught many tricks for years, but many scam texts still reach your screen."
      },
      {
       "t": "p",
       "text": "Smishing also works because a fake text can look just like the real thing. A scammer can copy the name, the logo, and the wording of a bank, a delivery company, or a government office. Sometimes a fake text even appears in the same conversation as real messages from that company, because scammers can fake the sender name. That is why you can never trust a text just because it 'looks right.'"
      },
      {
       "t": "p",
       "text": "Smishing means \"SMS phishing.\" SMS is the technology behind regular text messages. A scammer sends you a text that looks like it is from a real company, like a bank, a delivery service, or a toll road. The goal is to get you to click a link, pay money, or give up private information."
      },
      {
       "t": "p",
       "text": "Texts feel personal and urgent. Most people read a text within minutes. That is why scammers love them."
      }
     ]
    },
    {
     "key": "how",
     "title": "How the Scam Works",
     "blocks": [
      {
       "t": "p",
       "text": "Almost every smishing scam follows the same five-step pattern. Once you know the pattern, you can spot it no matter what story the scammer tells."
      },
      {
       "t": "ol",
       "items": [
        "The hook, the text gets your attention with a problem or a reward: a missed package, a locked account, an unpaid bill, a prize. It is built to match something that could be true in your life.",
        "The pressure. The message says you must act now. You may see a deadline like '24 hours' or a threat like 'your account will be closed.' Pressure is on purpose. A rushed person does not stop to think.",
        "The link or the request. The text tells you to tap a link, call a number, or reply with information. The link opens a fake website that looks like the real company.",
        "The theft. You type your password, your card number, or your personal details into the fake page. The scammer now has them. In some scams you only give a code or send money instead.",
        "The follow-up. Scammers often come back. They may sell your information to other criminals, or call you later pretending to be your bank's 'fraud team.' One mistake can lead to many more attempts."
       ]
      },
      {
       "t": "example",
       "title": "Example",
       "quote": "\"USPS: Your package could not be delivered because of an incomplete address. Update your address within 24 hours: usps-redelivery-help.com\"",
       "steps": [
        "The scammer sends this same text to thousands of phone numbers at once.",
        "A few people are waiting for a real package, so they click.",
        "The link opens a fake page that looks real. It asks for your name, address, and card number to pay a \"small fee.\"",
        "The scammer now has your card number. They may use it or sell it."
       ]
      },
      {
       "t": "p",
       "text": "There may not even be a package. The scammer only needs you to believe there is."
      }
     ]
    },
    {
     "key": "types",
     "title": "Most Common Types of Smishing",
     "blocks": [
      {
       "t": "p",
       "text": "Scammers change their stories all the time, but the list below covers the versions you are most likely to see. As you read each one, ask two questions: what is the hook, and what do they want from me? The answer is almost always money, a password, a code, or personal information."
      },
      {
       "t": "p",
       "text": "Many of these scams copy real life. Millions of people really do wait for packages, drive on toll roads, and have bank accounts, so a fake message about those things will match someone's day by luck. Scammers also follow the calendar. Expect more fake delivery texts near the holidays, more fake tax texts in tax season, and more fake charity texts after a disaster. A scam does not have to be clever. It only has to reach enough people."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Fake Delivery Problems.",
         "text": "The text says a package is stuck. It asks you to click a link or pay a small fee. It works even if you did not order anything, because people think, \"Maybe it is a gift.\""
        },
        {
         "lead": "Unpaid Toll Fees.",
         "text": "The text pretends to be a toll service like E-ZPass or SunPass. It says you owe a small amount and will be fined if you do not pay. The link goes to a fake payment page."
        },
        {
         "lead": "Bank Account Alerts.",
         "text": "The text says your account is locked or someone made a strange purchase. It asks you to \"log in\" through a link. The page is fake and steals your username and password."
        },
        {
         "lead": "Family Emergency.",
         "text": "The text says, \"Mom, I lost my phone. This is my new number. I need money right now.\" The scammer pretends to be a loved one in trouble."
        },
        {
         "lead": "Fake Wrong-Number Texts.",
         "text": "A message like \"Hi, are we still on for dinner?\" arrives from a stranger. If you reply, the stranger acts friendly and starts a conversation. This can slowly turn into a romance scam, a fake crypto investment, or sextortion (threats to share private photos)."
        },
        {
         "lead": "Verification Code Scam.",
         "text": "The scammer tries to log in to your account. Your real company sends you a code. Then the scammer texts, \"I sent a code to your phone by mistake. Can you send it back?\" If you send it, they get into your account."
        },
        {
         "lead": "Fake Prizes and Surveys.",
         "text": "\"You won a $500 gift card! Click to claim.\" The link steals your information."
        },
        {
         "lead": "Subscription Alerts.",
         "text": "\"Your Netflix payment failed. Update billing now.\" The link is fake."
        }
       ]
      }
     ]
    },
    {
     "key": "warning",
     "title": "Warning Signs",
     "blocks": [
      {
       "t": "p",
       "text": "A warning sign is a clue that something is off. One sign by itself does not always mean a scam, but two or more together should make you stop. Think of them like smoke: you do not wait to see the fire."
      },
      {
       "t": "p",
       "text": "Urgent language is the biggest clue. Real companies do give deadlines, but they rarely threaten you by text. Unknown or very long numbers matter because many scam texts come from email-to-text gateways or computers, not from a normal phone number. Strange links are another clue. Look for odd endings, extra words, or a spelling that is slightly wrong. Shortened links hide the real address, so they deserve extra care. Requests for private details are the clearest red flag: a real bank or store will not ask for your password, PIN, or full card number by text. Finally, offers that seem too good to be true are bait. Nobody gives away free money to a stranger by text."
      },
      {
       "t": "ul",
       "items": [
        "The text comes from a number you do not know, or a very long number",
        "It says \"urgent,\" \"final notice,\" or \"act within 24 hours\"",
        "It asks for a password, PIN, Social Security number, or payment",
        "The link looks strange or slightly misspelled",
        "It is too good to be true (free money, free phone, big prize)",
        "It does not use your name (\"Dear customer\")",
        "It tells you to keep it secret"
       ]
      }
     ]
    },
    {
     "key": "who",
     "title": "Who Is Targeted",
     "blocks": [
      {
       "t": "p",
       "text": "Anyone with a phone can be a target. Scammers do not need to know who you are. They send the same message to huge lists of numbers and see who answers. But some groups get special kinds of messages, because scammers study what each group cares about."
      },
      {
       "t": "p",
       "text": "It is important to understand that falling for a scam is not about being foolish. It is about timing. People get tricked when they are busy, worried, tired, or hopeful. A smart person who is rushing to work can click without thinking. That is why the best protection is a habit, not a talent. The habit is simple: pause before you tap."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Teens:",
         "text": "Fake gift card offers, fake giveaways, and \"you won\" texts. Teens also get sextortion texts and fake \"wrong number\" chats. If anyone threatens you with photos, do not pay and do not reply. Tell a trusted adult. You are not in trouble."
        },
        {
         "lead": "Adults:",
         "text": "Fake toll bills, delivery notices, and bank alerts, since adults are busy and often pay these things."
        },
        {
         "lead": "Seniors:",
         "text": "Family emergency texts and fake bank alerts. Scammers expect older people to care deeply about family and to trust official-looking messages."
        }
       ]
      }
     ]
    },
    {
     "key": "prevent",
     "title": "How to Prevent It",
     "blocks": [
      {
       "t": "p",
       "text": "The best protection has three layers: good habits, good phone settings, and a plan with your family."
      },
      {
       "t": "p",
       "lead": "Habits.",
       "text": "Do not tap links in texts you did not expect. Do not reply, even to say 'STOP,' because any reply tells the scammer your number is real. When a text claims to be from a company, leave the text and go to the company yourself: open its official app, or type its website into your browser. If a message is real, the same news will be waiting for you there."
      },
      {
       "t": "p",
       "lead": "Phone settings.",
       "text": "On an iPhone, you can turn on 'Filter Unknown Senders' in Messages settings, and use 'Report Junk' on messages from people not in your contacts. On many Android phones, Google Messages has spam protection you can turn on. You can also forward scam texts to 7726 (SPAM), which helps your phone company block them."
      },
      {
       "t": "p",
       "lead": "Family plans.",
       "text": "Choose a family safe word, a secret word only your family knows. If a text says a relative is in trouble, ask for the word or call that person on a number you already have. Talk about scams at the dinner table. People who have heard about a scam before are much harder to trick."
      },
      {
       "t": "ul",
       "items": [
        "Do not click links in texts you were not expecting.",
        "Do not reply, even to say \"STOP.\" A reply tells the scammer your number is real.",
        "Go to the source yourself. Open the official app or type the company's website into your browser.",
        "Forward the text to 7726 (SPAM) and then delete it.",
        "Block the number.",
        "Turn on your phone's spam text filter (in your Messages settings).",
        "Never share a verification code. A real company will never ask you to read a code back to them.",
        "For family, set up a family safe word that only your family knows."
       ]
      }
     ]
    },
    {
     "key": "scammed",
     "title": "If You Were Scammed",
     "blocks": [
      {
       "t": "p",
       "text": "If you clicked a link or shared information, do not panic and do not hide it. The first hour matters, and the sooner you act, the more you can protect. Banks and card companies deal with fraud every day. They will not judge you."
      },
      {
       "t": "p",
       "text": "Start by thinking about what you shared. If it was a password, change it right away, and change it anywhere else you used the same one. If it was a card number, call the number on the back of your card and ask them to block the card and send a new one. If you sent money, tell your bank at once and ask if the payment can be stopped or reversed. If you gave your Social Security number or other ID details, you can place a free fraud alert or credit freeze with the credit bureaus (Equifax, Experian, and TransUnion)."
      },
      {
       "t": "p",
       "text": "After that, watch your accounts closely for the next few months. Scammers sometimes wait before using stolen data. Report the text at ReportFraud.ftc.gov. Reports help investigators find patterns and shut down scam networks. Most of all, tell someone you trust. Shame keeps victims quiet, and quiet victims are easier to scam again."
      },
      {
       "t": "ol",
       "items": [
        "Do not send more money. Scammers often come back for more.",
        "If you shared a password, change it right away on that site and anywhere else you used it.",
        "If you shared a card number, call your bank or card company and ask them to freeze the card.",
        "Run a security scan on your phone if you clicked a link.",
        "Report it to ReportFraud.ftc.gov and forward the text to 7726.",
        "Tell someone. Being scammed is not your fault. Scammers do this for a living."
       ]
      }
     ]
    },
    {
     "key": "impact",
     "title": "Real-World Impact",
     "blocks": [
      {
       "t": "p",
       "text": "The harm from a scam text goes far beyond the first payment. A small 'fee' of a few dollars may look harmless, but the real goal is often your card number. Once a scammer has it, they can make large purchases or sell it to others."
      },
      {
       "t": "p",
       "text": "Stolen personal details can be used for identity theft. A criminal can open accounts, take loans, or file false tax returns in your name. Cleaning this up can take months or years. Malware is another risk: some links install software that spies on your phone, reads your messages, or steals your logins."
      },
      {
       "t": "p",
       "text": "There is also an emotional cost. Victims often feel embarrassed, angry, or afraid, and many do not tell anyone. Older adults can lose their life savings. Teens can lose gaming accounts or be threatened with private photos. And every successful scam pays for more scams, so each person who spots and reports one helps protect others."
      },
      {
       "t": "ul",
       "items": [
        "Direct money loss from fake fees and stolen card numbers",
        "Stolen identity: scammers can open accounts in your name",
        "Malware on your phone that steals data",
        "Stress, shame, and fear, which keep many victims from speaking up"
       ]
      }
     ]
    },
    {
     "key": "takeaways",
     "title": "Key Takeaways",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Texts from unknown senders asking for money or info are suspicious by default.",
        "Never click, never reply. Go to the real source yourself.",
        "Urgency is the scammer's best tool. Slow down."
       ]
      }
     ]
    }
   ],
   "quiz": [
    {
     "q": "What does \"smishing\" mean?",
     "options": [
      "Phishing by phone call",
      "Phishing by text message",
      "Phishing by email",
      "Phishing in person"
     ],
     "answer": 1,
     "why": "Smishing is phishing by text message."
    },
    {
     "q": "You get a text saying you owe $6.99 in unpaid tolls. You have never driven on a toll road. What should you do?",
     "options": [
      "Click the link and pay quickly to avoid a fine",
      "Reply \"STOP\"",
      "Do not click. Check the official toll website yourself, then report and delete the text",
      "Call the number in the text"
     ],
     "answer": 2,
     "why": "Never click. Go to the official source yourself, then report and delete."
    },
    {
     "q": "Someone texts you, \"I sent you a code by mistake, can you send it back?\" This is:",
     "options": [
      "A normal request",
      "A verification code scam",
      "A bank security check",
      "A prize notification"
     ],
     "answer": 1,
     "why": "This is a verification code scam. Never share codes."
    },
    {
     "q": "True or False: Replying \"STOP\" to a scam text is the safest way to make it end.",
     "options": [
      "True",
      "False"
     ],
     "answer": 1,
     "why": "Replying confirms your number is active. Do not reply at all."
    },
    {
     "q": "Which is a warning sign of a scam text? (Pick the BEST answer.)",
     "options": [
      "It uses your full name",
      "It comes from a number in your contacts",
      "It creates urgency and includes a strange link",
      "It was sent during the day"
     ],
     "answer": 2,
     "why": "Urgency plus a strange link is the classic scam pattern."
    },
    {
     "q": "What number can you forward scam texts to in the US?",
     "options": [
      "911",
      "411",
      "7726",
      "311"
     ],
     "answer": 2,
     "why": "7726 spells SPAM on your keypad."
    }
   ]
  },
  {
   "number": 2,
   "title": "Phishing",
   "goals": [
    "Explain what phishing is and how it connects to smishing, vishing, and email scams",
    "Tell the difference between regular phishing, spear phishing, and whaling",
    "Spot a fake login page",
    "Use tools like two-factor authentication and password managers to stay safe"
   ],
   "sections": [
    {
     "key": "what",
     "title": "What It Is",
     "blocks": [
      {
       "t": "p",
       "text": "The word phishing sounds like 'fishing' on purpose. A fisher puts bait on a hook and waits. A phisher sends bait, such as a fake message, and waits to see who takes it. The bait always looks like something you trust or want: a message from your bank, your school, your boss, or a company you use."
      },
      {
       "t": "p",
       "text": "Phishing is the main idea behind most scams in this course. It can arrive by text (smishing), phone (vishing), email, social media, or a fake website. The channel changes, but the trick is the same: the scammer pretends to be someone else so that you will hand over something valuable."
      },
      {
       "t": "p",
       "text": "What do phishers want? Usually one of three things. They want your login details, so they can enter your accounts. They want your money, through fake payments or stolen card numbers. Or they want your personal information, such as your Social Security number, birthday, or address, which they use or sell for identity theft. Even a single stolen email password can open the door to all three."
      },
      {
       "t": "p",
       "text": "Phishing is when a scammer pretends to be someone you trust to trick you into giving up private information. The word sounds like \"fishing.\" The scammer throws out bait and waits to see who bites."
      },
      {
       "t": "p",
       "text": "Phishing is the big umbrella. These all count as phishing:"
      },
      {
       "t": "ul",
       "items": [
        "Smishing: by text (Unit 1)",
        "Vishing: by phone call (Unit 3)",
        "Email phishing: by email (Unit 4)",
        "Social media phishing: by direct message (Unit 5)"
       ]
      },
      {
       "t": "p",
       "text": "What the scammer wants is almost always one of three things: your login, your money, or your personal information."
      }
     ]
    },
    {
     "key": "how",
     "title": "How the Scam Works",
     "blocks": [
      {
       "t": "p",
       "text": "The key to understanding phishing is this: the scammer does not break into your account. You hand them the key. They build a fake that is good enough to make you do it."
      },
      {
       "t": "p",
       "text": "First, the scammer chooses a trusted name and copies its look: the logo, the colors, the layout, even the footer text. This is easy, since anyone can copy images from a real website. Next, they build a fake login page on a web address they control. The address is usually close to the real one, with a tiny change. Then they send the bait and wait."
      },
      {
       "t": "p",
       "text": "When you type your password into the fake page, it goes straight to the scammer. Many fake pages even forward you to the real site afterward, so you never notice. Some advanced scams also ask for your two-factor code on the fake page, and the scammer uses it right away on the real site. That is why the most important rule is to never log in through a link you were sent. Always go to the site yourself."
      },
      {
       "t": "example",
       "title": "Example",
       "steps": [
        "You get an email that looks like it is from Microsoft: \"Unusual sign-in detected. Verify your account now.\"",
        "The email has the right logo and colors.",
        "You click Verify. A page opens that looks exactly like the Microsoft login page.",
        "You type your email and password.",
        "The page was fake. The scammer now has your password.",
        "The scammer logs into your real account, reads your email, resets other passwords, and may pretend to be you."
       ]
      },
      {
       "t": "p",
       "text": "The key trick: the fake page looks real, but the web address is wrong. For example, micros0ft-login.com is not microsoft.com."
      }
     ]
    },
    {
     "key": "types",
     "title": "Most Common Types of Phishing",
     "blocks": [
      {
       "t": "p",
       "text": "Phishing comes in different sizes. Some attacks are sprayed at millions of people, hoping a few will bite. Others are built carefully for one person or one company. The more the scammer knows about you, the more believable the message becomes."
      },
      {
       "t": "p",
       "text": "To see why targeted attacks are so dangerous, think about two messages. One says, 'Dear customer, your account is locked.' Another says, 'Hi Maria, I'm your cousin Alex. I saw your trip photos on Instagram and need your help with something at the airport.' The second one feels real because it uses true details. Scammers find these details on social media, school websites, company pages, and old data leaks. This is why what you share online matters."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Bulk Phishing.",
         "text": "The same message goes to millions of people. Scammers know only a small number will fall for it, and that is enough."
        },
        {
         "lead": "Spear Phishing.",
         "text": "A message aimed at one person. The scammer first researches you on social media. Then the message uses your name, school, job, or friends. Example: \"Hi Maria, this is Mr. Lopez from the front office. I need you to check this form for the field trip.\""
        },
        {
         "lead": "Whaling.",
         "text": "Spear phishing aimed at big targets like a CEO, school principal, or a business owner, because they can approve large payments."
        },
        {
         "lead": "Clone Phishing.",
         "text": "The scammer copies a real email you got before. They swap the real link for a fake link and send it again, saying \"Resending with the updated link.\""
        },
        {
         "lead": "Fake Login Pages.",
         "text": "A copy of a real website made only to steal your username and password."
        },
        {
         "lead": "Business Email Compromise.",
         "text": "The scammer pretends to be your boss or a vendor and asks you to change payment details or send a wire transfer."
        },
        {
         "lead": "QR Code Phishing (\"Quishing\").",
         "text": "A QR code on a flyer, parking meter, or email leads to a fake page. Always check where a QR code goes before opening it."
        }
       ]
      }
     ]
    },
    {
     "key": "warning",
     "title": "Warning Signs",
     "blocks": [
      {
       "t": "p",
       "text": "Phishing signs are about small details, so slow down and look closely. Start with who sent it. Check the full sender address, not only the display name. A scammer can set the display name to 'PayPal' but the address behind it will not be a real PayPal address. Look for tricks such as a zero instead of the letter 'o,' or extra words like 'support' or 'secure' added to the domain."
      },
      {
       "t": "p",
       "text": "Next, check the links. On a computer, hover over a link to see where it goes. On a phone, press and hold the link. If the address does not match the company, do not tap. Then check the feeling. Phishing aims to make you scared, rushed, or excited. If a message makes your heart jump, that is the exact moment to stop. Finally, remember that perfect writing is not proof. AI tools can now write clean, professional messages, so mistakes are no longer a reliable clue."
      },
      {
       "t": "ul",
       "items": [
        "The sender's address is almost right but not quite (like support@amaz0n-help.com)",
        "A generic greeting such as \"Dear user\"",
        "Spelling or grammar mistakes. Be careful: AI tools now help scammers write perfect messages, so a clean message is NOT proof it is real.",
        "Links where the real address does not match the company name",
        "Pressure to act fast or face a penalty",
        "A request to \"verify\" or \"confirm\" your login, even though you did not ask to",
        "Unexpected attachments"
       ]
      }
     ]
    },
    {
     "key": "who",
     "title": "Who Is Targeted",
     "blocks": [
      {
       "t": "p",
       "text": "Phishing reaches everyone, but each age group sees different bait. Scammers choose the story that fits your daily life."
      },
      {
       "t": "p",
       "text": "Teens often use many accounts, such as games, social media, and school sites, and they often get messages from people they do not know well. That makes them easy to reach with fake login pages and fake 'free item' offers. Adults get messages at work and about money, so the bait is invoices, shipping notices, and bank alerts. Seniors are often targeted with messages that sound official, such as Medicare, Social Security, or 'virus' warnings. Many older adults grew up in a time when official letters could be trusted, and scammers use that trust."
      },
      {
       "t": "p",
       "text": "No matter your age, the same defense works: do not use the link or number in the message. Find the real contact yourself."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Teens:",
         "text": "Fake messages about game accounts, social media logins, and school portals. Gaming and social media accounts are valuable to scammers."
        },
        {
         "lead": "Adults:",
         "text": "Work emails, fake shipping notices, fake bank alerts, and fake invoices. Spear phishing is common at work."
        },
        {
         "lead": "Seniors:",
         "text": "Fake alerts from Medicare, Social Security, or the bank. Fake \"your computer is infected\" pop-ups. Scammers often use official-sounding language."
        }
       ]
      }
     ]
    },
    {
     "key": "prevent",
     "title": "How to Prevent It",
     "blocks": [
      {
       "t": "p",
       "text": "You cannot stop scammers from sending bait, but you can make sure the bait does no harm. Think of it as a safety net with several layers, so if one fails, another catches you."
      },
      {
       "t": "p",
       "lead": "Layer 1: Do not log in through links.",
       "text": "Open the app or type the address yourself. This one habit stops most phishing."
      },
      {
       "t": "p",
       "lead": "Layer 2: Two-factor authentication (2FA).",
       "text": "With 2FA, a password alone is not enough. You also need a second step, such as a code or an approval on your phone. If a scammer steals your password, 2FA can still block them. App-based codes or security keys are stronger than text-message codes."
      },
      {
       "t": "p",
       "lead": "Layer 3: A password manager.",
       "text": "It stores long, different passwords for every site and fills them in only on the real address. If it refuses to fill in, you may be on a fake site."
      },
      {
       "t": "p",
       "lead": "Layer 4: Different passwords everywhere.",
       "text": "If you reuse one password, a single leak can open every account."
      },
      {
       "t": "p",
       "lead": "Layer 5: Updates and reporting.",
       "text": "Keep your devices updated, and report phishing so others are warned."
      },
      {
       "t": "ul",
       "items": [
        "Never click a link to log in. Open the website or app yourself, or type the address.",
        "Hover over links (on a computer) to see the real address before clicking. On a phone, press and hold the link.",
        "Turn on two-factor authentication (2FA). Even if a scammer gets your password, they cannot get in without the second step.",
        "Use a password manager. It fills in your password only on the real website. If it does not fill in, that is a warning sign.",
        "Use different passwords for different accounts. Never reuse them.",
        "Keep your phone and computer updated.",
        "Think before you scan a QR code from a stranger or a random sign."
       ]
      }
     ]
    },
    {
     "key": "scammed",
     "title": "If You Were Scammed",
     "blocks": [
      {
       "t": "p",
       "text": "Speed is your friend. The faster you act after a phishing mistake, the less damage a scammer can do. Do not wait to see if something bad happens."
      },
      {
       "t": "p",
       "text": "First, change the password for the account you used. Use a device you trust, and pick a new, long password you have never used before. Then change the same password anywhere else you used it. Turn on two-factor authentication. Next, look inside the account for signs of a break-in: emails you did not send, new forwarding rules, new devices, or changed recovery details. Scammers often set up forwarding so they can keep reading your mail."
      },
      {
       "t": "p",
       "text": "If you gave card or bank details, call your bank right away. If you are at work or school, tell your IT team or teacher now, since the same attack may be going to others. Finally, report the message. Do not feel ashamed. Even experts get fooled sometimes. What matters is how quickly you respond."
      },
      {
       "t": "ol",
       "items": [
        "Change your password on that account right now. Then change it anywhere else you used the same one.",
        "Turn on 2FA.",
        "Check your account for things you did not do, such as sent emails or changed settings.",
        "If you entered card or bank details, call your bank.",
        "Report it: forward phishing emails to reportphishing@apwg.org and report at ReportFraud.ftc.gov.",
        "At work or school, tell your IT team or teacher right away. Speed matters."
       ]
      }
     ]
    },
    {
     "key": "impact",
     "title": "Real-World Impact",
     "blocks": [
      {
       "t": "p",
       "text": "Phishing is the starting point for a large share of cybercrime. A stolen password can lead to stolen money, a hijacked social media account, or a hacked company. Once a scammer controls one account, they can use it to attack the next, such as sending phishing messages to all of your contacts."
      },
      {
       "t": "p",
       "text": "For businesses and schools, one careless click can open the network to attackers. This can lead to data breaches that expose thousands of people, and to ransomware that locks computers until a payment is made. For individuals, the harm includes lost savings, stolen identities, and long, stressful clean-up. The loss of trust is real, too. People start to fear their own inbox. The goal of this course is to replace that fear with simple habits that work."
      },
      {
       "t": "ul",
       "items": [
        "Stolen accounts and passwords",
        "Company data breaches that expose many people",
        "Money lost and identity theft",
        "One careless click at work can put a whole organization at risk"
       ]
      }
     ]
    },
    {
     "key": "takeaways",
     "title": "Key Takeaways",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Phishing is the umbrella. Smishing, vishing, and email scams are all phishing.",
        "Do not log in through a link. Go to the real site yourself.",
        "2FA and a password manager are two of your strongest defenses."
       ]
      }
     ]
    }
   ],
   "quiz": [
    {
     "q": "Which is the BEST description of phishing?",
     "options": [
      "A computer virus",
      "Tricking someone into giving private info by pretending to be a trusted source",
      "A kind of spam filter",
      "A way to speed up your internet"
     ],
     "answer": 1,
     "why": "Phishing is trickery that pretends to be a trusted source."
    },
    {
     "q": "A scammer researches you on social media and sends a message using your name and school. This is:",
     "options": [
      "Bulk phishing",
      "Clone phishing",
      "Spear phishing",
      "Whaling"
     ],
     "answer": 2,
     "why": "Spear phishing is aimed at one person."
    },
    {
     "q": "What is whaling?",
     "options": [
      "Phishing aimed at leaders and executives",
      "Phishing by text message",
      "A fake QR code",
      "A password reset"
     ],
     "answer": 0,
     "why": "Whaling targets bosses and leaders."
    },
    {
     "q": "A password manager does NOT fill in your password on a website. What might this mean?",
     "options": [
      "The password manager is broken, so just type it in",
      "The site may be fake. Check the address carefully",
      "Your password expired",
      "Nothing"
     ],
     "answer": 1,
     "why": "A manager only fills in on the real address. It is a warning sign."
    },
    {
     "q": "True or False: If an email has perfect spelling and grammar, it must be real.",
     "options": [
      "True",
      "False"
     ],
     "answer": 1,
     "why": "Scammers use AI to write clean messages now."
    },
    {
     "q": "What is the SAFEST way to log in after getting an \"account problem\" email?",
     "options": [
      "Click the button in the email",
      "Reply with your password",
      "Open the official website or app yourself and log in there",
      "Call the number in the email"
     ],
     "answer": 2,
     "why": "Always go to the real site yourself."
    }
   ]
  },
  {
   "number": 3,
   "title": "Call Scams (Vishing)",
   "goals": [
    "Explain what vishing is",
    "Name the most common phone scams",
    "Know why scammers use gift cards, wire transfers, and crypto",
    "Know exactly what to do when an unexpected caller pressures you"
   ],
   "sections": [
    {
     "key": "what",
     "title": "What It Is",
     "blocks": [
      {
       "t": "p",
       "text": "Vishing is a mix of 'voice' and 'phishing.' It is a scam done by phone call or voicemail. The caller pretends to be a person or group you trust, such as a bank, a government agency, a tech company, or a family member. Their goal is to scare you or charm you into giving money or private details."
      },
      {
       "t": "p",
       "text": "Phone scams are powerful for one big reason: a live voice feels real. A caller can hear how you react and change the story on the spot. If you sound afraid, they push harder. If you sound unsure, they act friendly and patient. They may even call back many times to wear you down. A text or email cannot do that."
      },
      {
       "t": "p",
       "text": "Modern tools make phone scams easier. Scammers use software to place thousands of calls at once, and can fake the number on your screen. Now some also use AI to copy real voices (see Unit 8). So remember: a call can look and sound real and still be fake."
      },
      {
       "t": "p",
       "text": "Vishing means \"voice phishing.\" A scammer calls you and pretends to be someone official or someone you love. They use fear, urgency, or kindness to get your money or private information."
      },
      {
       "t": "p",
       "text": "Phone scams work because a live voice feels real. The caller can respond to what you say, push harder, and make you feel like you must act now."
      }
     ]
    },
    {
     "key": "how",
     "title": "How the Scam Works",
     "blocks": [
      {
       "t": "p",
       "text": "Most vishing scams follow a script that is built to take away your ability to think clearly. Learn the script and you can see through it."
      },
      {
       "t": "p",
       "lead": "The opening.",
       "text": "The caller sounds calm and official. They give a name, a title, and sometimes a badge number. This builds trust and makes you feel that you are talking to a real professional."
      },
      {
       "t": "p",
       "lead": "The problem.",
       "text": "The caller says something serious is wrong. You owe taxes, your account was hacked, your grandchild is hurt, or your computer is infected. Fear shuts down careful thinking."
      },
      {
       "t": "p",
       "lead": "The solution.",
       "text": "The caller offers a way out, but only if you act now: pay a fine, move your money, give a code, or let them control your computer."
      },
      {
       "t": "p",
       "lead": "The isolation.",
       "text": "You are told to stay on the line, not to hang up, and not to tell anyone. This cuts you off from people who could help you see the scam."
      },
      {
       "t": "p",
       "lead": "The payment.",
       "text": "The caller asks for a method that is hard to trace or reverse, like gift cards, wire transfers, or crypto. Once the money is gone, it is almost never coming back."
      },
      {
       "t": "example",
       "title": "Example (government impersonation)",
       "quote": "\"This is Officer Daniels from the Social Security Administration. Your number has been linked to fraud. Your benefits will be suspended and a warrant is being issued. Press 1 to speak to an agent.\"",
       "steps": [
        "A recorded voice (a robocall) calls thousands of numbers.",
        "People who press 1 are connected to a live scammer.",
        "The scammer sounds calm and official. They say you must \"clear your name\" today.",
        "They tell you to pay with gift cards, a wire transfer, or cryptocurrency, and to stay on the phone the whole time.",
        "Once you pay, the money is gone."
       ]
      },
      {
       "t": "p",
       "text": "Remember: Real government agencies do not call to threaten arrest, and they never demand payment in gift cards."
      }
     ]
    },
    {
     "key": "types",
     "title": "Most Common Types of Call Scams",
     "blocks": [
      {
       "t": "p",
       "text": "Phone scammers use a few main stories again and again. Each one is built on a basic human feeling: fear, love, greed, or trust. Government and bank scams use fear of trouble. Family emergency scams use love. Prize scams use greed. Tech support scams use trust in experts."
      },
      {
       "t": "p",
       "text": "Notice that many of these scams start with a recorded message or a pop-up on your screen. This is a filter. The scammer is not looking for everyone. They are looking for the people who respond, because those people are the most likely to pay. If you press a button or call back a number, you may be marked as a likely target and receive more calls."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Government Impersonation.",
         "text": "The caller says to be from the IRS, Social Security, Medicare, or the police. They say you owe money or face arrest."
        },
        {
         "lead": "Tech Support Scam.",
         "text": "The caller (or a pop-up on your screen) says your computer has a virus. They ask for remote access to \"fix\" it, then steal files or charge you for a fake repair."
        },
        {
         "lead": "Grandparent / Family Emergency Scam.",
         "text": "\"Grandma, it's me. I'm in jail and I need bail money. Please don't tell Mom.\" Voices may even be cloned by AI (see Unit 8)."
        },
        {
         "lead": "Bank Fraud Department Scam.",
         "text": "The caller says they are from your bank's fraud team. They say your account is under attack and ask you to \"move your money to a safe account.\" That \"safe account\" belongs to the scammer."
        },
        {
         "lead": "Prize and Lottery Robocalls.",
         "text": "\"You've won a cruise!\" You must pay taxes or fees first."
        },
        {
         "lead": "Spoofed Caller ID.",
         "text": "Scammers fake the number on your screen so it looks like your bank, a government office, or even a local number. Caller ID cannot be trusted."
        },
        {
         "lead": "Fake Charity Calls.",
         "text": "After a disaster, callers ask for donations for a cause that is not real."
        },
        {
         "lead": "Utility Shutoff Scam.",
         "text": "\"Your electricity will be cut off in one hour unless you pay now.\""
        },
        {
         "lead": "Student Loan / Debt Relief Scam.",
         "text": "The caller offers to erase your loans for an upfront fee."
        }
       ]
      }
     ]
    },
    {
     "key": "extra",
     "title": "Why Scammers Ask for Gift Cards, Wires, and Crypto",
     "blocks": [
      {
       "t": "p",
       "text": "These payment types are fast, hard to trace, and almost impossible to get back. Credit cards can often be disputed. Gift cards, wire transfers, and crypto usually cannot. No real business or government agency demands payment this way."
      }
     ]
    },
    {
     "key": "warning",
     "title": "Warning Signs",
     "blocks": [
      {
       "t": "p",
       "text": "On the phone, warning signs often come in the way the caller acts, not only in what they say. Real organizations are patient. They send letters, give you time, and let you call back. Scammers do the opposite."
      },
      {
       "t": "p",
       "text": "Pressure is the top sign. Any call that says 'right now' or 'today only' should make you pause. Threats come next: real agencies do not threaten you with arrest over the phone. Strange payment methods are a giant red flag. No real agency, bank, or company asks you to pay with gift cards, crypto, or a wire to a stranger. Secrecy is another sign. If a caller says 'do not tell your family' or 'do not talk to the bank,' that is the scammer protecting the scam. And watch for requests for details they should already have, such as your Social Security number or a code sent to your phone. If someone called you, they should not need to ask you who you are."
      },
      {
       "t": "ul",
       "items": [
        "Pressure to act right now",
        "Threats of arrest, fines, or shutting off service",
        "Payment by gift card, wire transfer, crypto, or cash in the mail",
        "You are told to stay on the line or keep it secret",
        "The caller asks for your Social Security number, bank details, or a code sent to your phone",
        "The caller called you and is asking for private information",
        "A caller who gets angry when you say, \"I'll call you back\""
       ]
      }
     ]
    },
    {
     "key": "who",
     "title": "Who Is Targeted",
     "blocks": [
      {
       "t": "p",
       "text": "Every age group gets phone scams, but the stories are different. Scammers pick the story that is most likely to work on you."
      },
      {
       "t": "p",
       "text": "Seniors are often targeted most heavily, because scammers expect older adults to care deeply about family, to be polite on the phone, and sometimes to have savings. A caller may stay friendly for weeks to build a bond. This is why hanging up is not rude. It is a skill. Adults are often busy, so scammers use bank fraud and tax stories that need a fast decision. Teens may get calls about a 'problem' with a game or a social media account, or fake prize calls."
      },
      {
       "t": "p",
       "text": "If you are a younger family member, you can help. Teach older relatives about the family safe word. Set up call blocking on their phone. And tell them they can always say, 'I'll call you back,' and then check with you first."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Teens:",
         "text": "Fake \"you won a prize\" calls, calls about a \"problem\" with a game or social media account, and calls pretending to be a parent's employer."
        },
        {
         "lead": "Adults:",
         "text": "Fake bank fraud calls, fake tax calls, and calls about a \"package with illegal items\" in your name."
        },
        {
         "lead": "Seniors:",
         "text": "Grandparent scams, tech support scams, Medicare scams, and romance-based calls. Scammers may call many times to wear you down. Hanging up is not rude. It is smart."
        }
       ]
      }
     ]
    },
    {
     "key": "prevent",
     "title": "How to Prevent It",
     "blocks": [
      {
       "t": "p",
       "text": "Preventing phone scams is mostly about changing who controls the call. When a stranger calls you, they control it. When you hang up and call back using a number you found yourself, you control it."
      },
      {
       "t": "p",
       "lead": "The call-back rule.",
       "text": "If someone claims to be from your bank, the IRS, or any company, say 'I will call you back,' hang up, and look up the official number. Use the number on your card, your statement, or the official website, never a number the caller gave you. Wait a minute or use a different phone if you can, since some scammers try to keep the line open."
      },
      {
       "t": "p",
       "lead": "Protect your information.",
       "text": "Never give your Social Security number, PIN, passwords, or codes to someone who called you."
      },
      {
       "t": "p",
       "lead": "Use technology.",
       "text": "Turn on spam-call blocking in your phone settings or from your phone company. Let unknown numbers go to voicemail. A real caller will leave a message."
      },
      {
       "t": "p",
       "lead": "Use people.",
       "text": "Agree on a family safe word. Make a plan: 'If anyone asks for money over the phone, I call a family member first.' A short pause to talk to someone is the best defense scammers cannot beat."
      },
      {
       "t": "ul",
       "items": [
        "Hang up. You never owe a stranger an explanation.",
        "Call back on a number you look up yourself, such as the number on the back of your card or on the official website.",
        "Never give out your Social Security number, passwords, PINs, or codes to someone who called you.",
        "Let unknown numbers go to voicemail. Real callers leave messages.",
        "Use your phone's spam call blocking and carrier tools.",
        "Sign up for the Do Not Call Registry (donotcall.gov). Note: scammers ignore it, but it helps you spot illegal calls.",
        "Set up a family safe word to confirm \"emergency\" calls from relatives.",
        "Never allow remote access to your computer for someone who contacted you first.",
        "For older family members: agree on a plan that says, \"If someone asks for money by phone, I call you first.\""
       ]
      }
     ]
    },
    {
     "key": "scammed",
     "title": "If You Were Scammed",
     "blocks": [
      {
       "t": "p",
       "text": "If you have been tricked by a phone scammer, the most important thing to know is that the way you paid decides what you can do. Move quickly, and be honest about what happened when you speak to your bank or the company."
      },
      {
       "t": "p",
       "text": "If you paid by credit or debit card, call the number on the card and dispute the charge. If you paid with a gift card, call the company that made the card right away, tell them it was a scam, and keep the card and receipt. Sometimes the money can be frozen. If you sent a wire or bank transfer, call your bank at once and ask for a recall. If you paid with cryptocurrency, report it to the exchange and to the FTC, though recovery is difficult."
      },
      {
       "t": "p",
       "text": "If you gave someone remote access to your computer, turn it off, unplug it from the internet, and have a trusted technician check it. Change your passwords from another device. Be careful of 'recovery' calls that promise to get your money back for a fee. These are second scams aimed at victims. Report the call at ReportFraud.ftc.gov and, for older adults, to the National Elder Fraud Hotline at 1-833-372-8311."
      },
      {
       "t": "ol",
       "items": [
        "Hang up and do not answer if they call back.",
        "If you paid by card, call your card company right away and dispute the charge.",
        "If you paid by gift card, call the gift card company at once. Tell them it was fraud. Keep the card and the receipt.",
        "If you paid by wire or bank transfer, call your bank immediately and ask for a \"recall.\" Speed matters.",
        "If you gave remote access, turn off the computer, disconnect it from the internet, and have a trusted technician check it. Change your passwords on a different device.",
        "Report it at ReportFraud.ftc.gov. Seniors can also call the National Elder Fraud Hotline: 1-833-372-8311.",
        "Tell a trusted person. Shame helps the scammer. Talking helps you."
       ]
      }
     ]
    },
    {
     "key": "impact",
     "title": "Real-World Impact",
     "blocks": [
      {
       "t": "p",
       "text": "Phone scams cause some of the biggest losses of any scam type, especially for older adults. A single call can empty a bank account or wipe out retirement savings that took a lifetime to build. Because the payment methods are hard to trace, victims rarely get the money back."
      },
      {
       "t": "p",
       "text": "The damage is not only financial. Victims often feel deep shame. They may stop answering the phone, pull away from friends, or fear that their family will think they cannot manage on their own. This loss of confidence and independence can be as hard as the money loss. Scammers know this and count on silence."
      },
      {
       "t": "p",
       "text": "There is also a ripple effect. Scammers share lists of people who have paid, so victims can be targeted again and again. That is why it is so important to speak up, report the call, and surround yourself with people who can help you check things out."
      },
      {
       "t": "ul",
       "items": [
        "Many victims, especially older adults, lose their savings",
        "Gift card and wire payments are very hard to recover",
        "Victims may be targeted again by \"recovery scams\" that promise to get their money back for a fee",
        "Fear, shame, and loss of trust"
       ]
      }
     ]
    },
    {
     "key": "takeaways",
     "title": "Key Takeaways",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Caller ID can be faked. Do not trust it.",
        "A real agency will not threaten you or demand gift cards.",
        "Hang up, look up the number yourself, and call back."
       ]
      }
     ]
    }
   ],
   "quiz": [
    {
     "q": "A caller says they are from the IRS and you must pay with gift cards today or be arrested. This is:",
     "options": [
      "A normal tax process",
      "A scam",
      "A bank notice",
      "A prize"
     ],
     "answer": 1,
     "why": "Real agencies never demand gift cards or threaten arrest by phone."
    },
    {
     "q": "Why can't you trust Caller ID?",
     "options": [
      "It is always too slow",
      "Scammers can fake the number that appears",
      "It only works on landlines",
      "It shows the wrong time"
     ],
     "answer": 1,
     "why": "Spoofing fakes the number you see."
    },
    {
     "q": "Someone calls claiming to be from your bank's fraud department and asks you to move money to a \"safe account.\" What should you do?",
     "options": [
      "Move the money as fast as you can",
      "Give them your PIN to prove who you are",
      "Hang up and call the number on the back of your card",
      "Ask them to text you a link"
     ],
     "answer": 2,
     "why": "Always call back on a number you look up yourself."
    },
    {
     "q": "True or False: A real company may ask you to pay a bill using gift cards.",
     "options": [
      "True",
      "False"
     ],
     "answer": 1,
     "why": "Gift card payment is a major red flag."
    },
    {
     "q": "A caller says your computer has a virus and asks for remote access. You should:",
     "options": [
      "Allow access if they sound professional",
      "Hang up. Never give remote access to someone who contacted you first",
      "Pay a small fee",
      "Give them your password to be safe"
     ],
     "answer": 1,
     "why": "Never allow remote access to a caller who contacted you first."
    },
    {
     "q": "Your \"grandchild\" calls crying and asks you to send money and keep it secret. What is the BEST first step?",
     "options": [
      "Send the money right away",
      "Ask a personal question or use your safe word, then call the grandchild on their known number",
      "Keep it secret as requested",
      "Give them your bank info"
     ],
     "answer": 1,
     "why": "Verify through a safe word or by calling their known number."
    }
   ]
  },
  {
   "number": 4,
   "title": "Email Scams",
   "goals": [
    "Recognize the most common email scams",
    "Check a sender's address and a link before clicking",
    "Understand why attachments can be dangerous",
    "Know what to do if you clicked or opened something"
   ],
   "sections": [
    {
     "key": "what",
     "title": "What It Is",
     "blocks": [
      {
       "t": "p",
       "text": "Email scams are fake emails that look real. They are one of the oldest tricks on the internet, and they still work because email is part of daily life. Almost everyone has an inbox, and most of us get many messages a day. It is easy to click on one that looks normal."
      },
      {
       "t": "p",
       "text": "An email scam can try to do different things. Some want you to click a link to a fake login page. Some want you to open a file that installs a virus. Some want you to send money, buy gift cards, or share private information. And some just want you to reply, so they know your address is active and can send you more."
      },
      {
       "t": "p",
       "text": "Email scams are cheap for criminals. Sending a million emails costs almost nothing, so even if only a tiny number of people fall for it, the scammer makes a profit. That is why your inbox may fill with junk, and why a few of those messages are worth taking seriously."
      },
      {
       "t": "p",
       "text": "An email scam is a fake email sent to trick you into clicking a link, opening a file, sending money, or giving up information. Email scams are a type of phishing, and they are one of the oldest and most common scams. They are cheap for scammers to send. Millions can go out in minutes."
      }
     ]
    },
    {
     "key": "how",
     "title": "How the Scam Works",
     "blocks": [
      {
       "t": "p",
       "text": "An email scam is built like a small machine with four parts: the sender, the story, the trap, and the payoff."
      },
      {
       "t": "p",
       "lead": "The sender.",
       "text": "The scammer makes the email look like it came from someone you trust. They can fake a display name, copy a company's logo, or even take over a real person's email account. When an account is really hacked, the email comes from your friend's real address, which makes it much harder to spot."
      },
      {
       "t": "p",
       "lead": "The story.",
       "text": "The message gives a reason to act: a bill is due, a package is late, your account will be closed, your boss needs a favor, or a prize is waiting."
      },
      {
       "t": "p",
       "lead": "The trap.",
       "text": "The trap may be a link to a fake website, an attachment with hidden malware, or a request to call a number or send money. Sometimes there is no link at all. The trap is just the phone number."
      },
      {
       "t": "p",
       "lead": "The payoff.",
       "text": "The scammer gets what they want: your password, your card details, your money, or access to your computer or workplace network."
      },
      {
       "t": "example",
       "title": "Example (fake invoice)",
       "quote": "From: billing@geek-squad-support.net\nSubject: Your order #48291 has been renewed – $349.99\n\"Thank you for your purchase. If you did not make this purchase, call 1-8XX-XXX-XXXX immediately to cancel.\"",
       "steps": [
        "You never bought anything, so you panic and call the number.",
        "The \"agent\" asks for remote access to your computer \"to process the refund.\"",
        "They steal your information or trick you into sending them money."
       ]
      },
      {
       "t": "p",
       "text": "The email never needed a link. The phone number was the trap."
      }
     ]
    },
    {
     "key": "types",
     "title": "Most Common Types of Email Scams",
     "blocks": [
      {
       "t": "p",
       "text": "Email scams fall into a few main groups. Some target ordinary people at home. Others target workers, because a company can lose far more money than one person. A message that looks like it comes from your boss is much more powerful than one from a stranger."
      },
      {
       "t": "p",
       "text": "It helps to remember that the goal changes. Fake invoices and account alerts want a click or a call. Boss emails and business scams want a payment. Job and scholarship scams want fees and personal details. Malware emails want to get a program onto your device. Blackmail emails want fear. Once you know the goal, it is easier to see how the message is trying to steer you."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Fake Invoice or Receipt.",
         "text": "Says you were charged for something you did not buy. You are told to call or click to cancel."
        },
        {
         "lead": "Account Suspended / Verify Now.",
         "text": "Says your email, bank, or social media account will be locked unless you click and log in."
        },
        {
         "lead": "Boss or Coworker Impersonation.",
         "text": "An email that seems to come from your boss: \"Are you at your desk? I need you to buy gift cards for a client.\""
        },
        {
         "lead": "Business Email Compromise.",
         "text": "A scammer pretends to be a vendor or executive. They ask to change payment details or send a large wire transfer."
        },
        {
         "lead": "Fake Job Offer.",
         "text": "An easy, high-paying work-from-home job. They ask for personal info, or send a fake check and ask you to \"send back the extra.\" The check bounces later and you owe the bank."
        },
        {
         "lead": "Malware Attachment.",
         "text": "A file such as a fake invoice, resume, or \"voicemail\" that installs a virus or ransomware (software that locks your files until you pay)."
        },
        {
         "lead": "Lottery or Inheritance Scam.",
         "text": "\"You inherited $4 million from a distant relative.\" You must pay fees first."
        },
        {
         "lead": "Advance-Fee / Prince Scam.",
         "text": "A stranger needs your help moving money and promises you a share."
        },
        {
         "lead": "Sextortion / Blackmail Email.",
         "text": "\"I recorded you through your webcam. Pay or I will send it to your contacts.\" This is almost always a bluff. The scammer may even include an old password from a past data breach to scare you."
        },
        {
         "lead": "Fake Government or Tax Refund Email.",
         "text": "Says you have a refund waiting. The link steals your information."
        },
        {
         "lead": "School or Scholarship Scam.",
         "text": "\"You've been selected for a scholarship. Pay the processing fee.\" Real scholarships do not charge you to apply."
        }
       ]
      }
     ]
    },
    {
     "key": "warning",
     "title": "Warning Signs",
     "blocks": [
      {
       "t": "p",
       "text": "Email gives you more time to look than a phone call or a face-to-face meeting. Use that time. You can read the message slowly, check the details, and ask someone else before you do anything."
      },
      {
       "t": "p",
       "text": "Start with the sender address. A display name can say anything, but the address behind it tells the truth. Look for small tricks, like a number instead of a letter, or extra words added to a company name. Check the greeting: 'Dear customer' or 'Dear user' often means a mass message. Look at the links by hovering over them without clicking. Does the address match the real company? Look at attachments: be careful with files you did not expect, especially zip files, programs, or documents that ask you to 'enable content.' And pay attention to your feelings. If the message makes you panic, hurry, or get excited, that feeling is the scammer's tool. Remember, too, that spelling mistakes are no longer a reliable clue, since AI can fix them."
      },
      {
       "t": "ul",
       "items": [
        "Sender's address is odd, misspelled, or does not match the company name",
        "Generic greeting like \"Dear customer\"",
        "Urgent or threatening language",
        "Links where the visible text does not match the real address when you hover over it",
        "Unexpected attachments, especially .zip, .exe, or Office files that ask you to \"enable macros\" or \"enable content\"",
        "A message from a \"friend\" that is out of character",
        "A \"Reply-To\" address that is different from the sender",
        "Requests to keep it private or to buy gift cards",
        "Too-good-to-be-true offers",
        "Remember: AI can now fix spelling and grammar, so a well-written email can still be a scam."
       ]
      }
     ]
    },
    {
     "key": "extra",
     "title": "How to Check an Email in 5 Steps",
     "blocks": [
      {
       "t": "ol",
       "items": [
        "Look at the full sender address, not just the display name.",
        "Hover over every link to see where it really goes.",
        "Ask: Did I expect this? If not, be cautious.",
        "Ask: Does it make me feel scared or rushed? That feeling is a clue.",
        "Verify. Contact the person or company through a number or site you already know."
       ]
      }
     ]
    },
    {
     "key": "who",
     "title": "Who Is Targeted",
     "blocks": [
      {
       "t": "p",
       "text": "Email scams target different people in different ways. Scammers think about what you are likely to care about and what you are likely to respond to."
      },
      {
       "t": "p",
       "text": "Teens are often shown fake scholarships, fake jobs, and fake alerts about game or social media accounts. Teens may also get blackmail emails that claim to have private photos or videos. These are usually bluffs, and the right response is never to pay and to tell a trusted adult. Working adults are targeted with fake invoices, shipping notices, and messages that look like they come from a boss or coworker. Many of these attacks happen on work accounts. Seniors often see fake lottery wins, fake subscription renewals, and fake virus warnings. These play on politeness, fear of losing money, and a wish to do the right thing."
      },
      {
       "t": "p",
       "text": "It does not matter how old you are. What protects you is a short routine: look at the sender, look at the link, and verify any money request by voice."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Teens:",
         "text": "Fake scholarship offers, fake job offers, fake game or social media notices, and sextortion emails. If you get a blackmail email, do not pay, do not reply, and tell an adult."
        },
        {
         "lead": "Adults:",
         "text": "Boss impersonation, fake invoices, shipping notices, and tax scams. Many attacks happen at work."
        },
        {
         "lead": "Seniors:",
         "text": "Fake lottery emails, fake subscription renewals, fake virus alerts, and romance or friendship scams. Scammers count on politeness and trust."
        }
       ]
      }
     ]
    },
    {
     "key": "prevent",
     "title": "How to Prevent It",
     "blocks": [
      {
       "t": "p",
       "text": "Strong email safety is a mix of careful habits and helpful tools."
      },
      {
       "t": "p",
       "lead": "Habits.",
       "text": "Never open an attachment you did not expect, even if it seems to come from someone you know. Ask them first through another way, such as a text or a call. Never enable macros or 'enable content' in a file from email. Never reply to a suspicious message. And for any request involving money, passwords, or changes to payment details, confirm by phone using a number you already have. This one rule stops most business email scams."
      },
      {
       "t": "p",
       "lead": "Tools.",
       "text": "Use a password manager and a different password for every account. Turn on two-factor authentication, especially on your email, since email can reset all your other accounts. Keep your spam filter on. Keep your device and apps updated so known security holes are closed."
      },
      {
       "t": "p",
       "lead": "Teamwork.",
       "text": "At work, use the 'report phishing' button or tell your IT team. Do not just delete a suspicious message, because your report may protect your coworkers. At home, talk with your family about how to spot these emails."
      },
      {
       "t": "ul",
       "items": [
        "Do not open attachments you did not expect, even from someone you know. Ask them first.",
        "Never enable macros or \"enable content\" in a file from email.",
        "Confirm money requests by phone, using a number you already have.",
        "Use strong, different passwords and a password manager.",
        "Turn on two-factor authentication everywhere you can.",
        "Keep spam filters on, and keep your devices updated.",
        "At work, report suspicious emails to your IT team instead of deleting them.",
        "Never reply to scam emails. Report and delete.",
        "Do not use public Wi-Fi for banking or shopping without extra protection."
       ]
      }
     ]
    },
    {
     "key": "scammed",
     "title": "If You Were Scammed",
     "blocks": [
      {
       "t": "p",
       "text": "If you think you clicked on a bad link or opened a bad file, act fast and do not feel embarrassed. Email scammers count on people hiding their mistakes. The more quickly you speak up, the more damage you can prevent."
      },
      {
       "t": "p",
       "text": "If you opened a file or installed something, disconnect the device from the internet and run a security scan. If you are not sure, ask a trusted technician or your IT team for help. If you typed a password, change it right away from a safe device, and change it on every site where you used it. Check your email for rules you did not create, such as automatic forwarding. If you gave card or bank details, call your bank now."
      },
      {
       "t": "p",
       "text": "If you sent money for a business request, call your bank immediately and ask for a recall. Speed makes a big difference with wire transfers. Then report the email to your email provider, to ReportFraud.ftc.gov, and to reportphishing@apwg.org. If your personal information was stolen, think about placing a free credit freeze at the three credit bureaus."
      },
      {
       "t": "ol",
       "items": [
        "Disconnect the device from the internet if you opened a suspicious file.",
        "Run a security scan and get help from a trusted technician if needed.",
        "Change your passwords from a safe device. Start with your email and bank.",
        "Call your bank if you entered financial info or sent money.",
        "Report the email to your email provider (\"Report phishing\") and at ReportFraud.ftc.gov. Forward it to reportphishing@apwg.org.",
        "At work, tell IT immediately. Do not wait.",
        "Consider a credit freeze (free) at Equifax, Experian, and TransUnion if your personal data was stolen."
       ]
      }
     ]
    },
    {
     "key": "impact",
     "title": "Real-World Impact",
     "blocks": [
      {
       "t": "p",
       "text": "Email scams cause harm at every level. For one person, a fake email can lead to a drained bank account, a stolen identity, or a hijacked email address that is then used to trick friends and family."
      },
      {
       "t": "p",
       "text": "For companies, schools, and hospitals, the impact can be much bigger. A single business email scam can cost a company hundreds of thousands of dollars in one wire transfer. Ransomware, which often arrives through an email attachment or link, can lock whole networks. When that happens, offices may stop working, student records may be lost, and patients may be delayed in getting care."
      },
      {
       "t": "p",
       "text": "The damage also spreads. Once a scammer controls one email account, they can read old messages, learn how you talk, and send convincing emails to everyone you know. That is why protecting your email account is one of the most important things you can do."
      },
      {
       "t": "ul",
       "items": [
        "Businesses lose large sums through fake wire requests",
        "Ransomware can lock company, school, and hospital systems",
        "Stolen email accounts are used to scam your contacts",
        "Identity theft can follow for years"
       ]
      }
     ]
    },
    {
     "key": "takeaways",
     "title": "Key Takeaways",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Check the sender and hover over links before you click.",
        "Never open surprise attachments.",
        "Money requests must be confirmed by voice with a known number.",
        "A scammer can write well. Do not trust an email just because it looks good."
       ]
      }
     ]
    }
   ],
   "quiz": [
    {
     "q": "You get an email from your \"boss\" asking you to buy gift cards and send the codes. You should:",
     "options": [
      "Buy them right away",
      "Verify by calling your boss on a known number",
      "Reply with the codes",
      "Forward it to everyone"
     ],
     "answer": 1,
     "why": "Always verify money requests by calling a known number."
    },
    {
     "q": "What is ransomware?",
     "options": [
      "A free antivirus",
      "Software that locks your files until you pay",
      "A type of spam folder",
      "A password manager"
     ],
     "answer": 1,
     "why": "Ransomware locks files until you pay."
    },
    {
     "q": "Which email address is MOST suspicious?",
     "options": [
      "support@paypal.com",
      "support@paypa1-security.com",
      "help@microsoft.com",
      "noreply@amazon.com"
     ],
     "answer": 1,
     "why": "paypa1-security.com uses a number \"1\" in place of an \"l.\""
    },
    {
     "q": "True or False: A well-written email with perfect grammar is always safe.",
     "options": [
      "True",
      "False"
     ],
     "answer": 1,
     "why": "Scammers use AI to write clean messages."
    },
    {
     "q": "You receive a \"job offer\" with a check, and you are told to deposit it and send back part of the money. This is:",
     "options": [
      "A normal signing bonus",
      "A fake check scam",
      "A tax refund",
      "A school payment"
     ],
     "answer": 1,
     "why": "This is a fake check scam. The check will bounce and you owe the bank."
    },
    {
     "q": "You clicked a link in a phishing email and entered your password. What is the FIRST thing to do?",
     "options": [
      "Nothing, it is probably fine",
      "Change your password right away and turn on 2FA",
      "Reply to the sender",
      "Wait a week"
     ],
     "answer": 1,
     "why": "Change your password and add 2FA immediately."
    }
   ]
  },
  {
   "number": 5,
   "title": "Social Media Scams",
   "goals": [
    "Name the most common scams on social media and messaging apps",
    "Spot fake profiles, fake ads, and hacked accounts",
    "Understand how romance and investment scams grow slowly",
    "Protect your accounts and your privacy"
   ],
   "sections": [
    {
     "key": "what",
     "title": "What It Is",
     "blocks": [
      {
       "t": "p",
       "text": "Social media scams are tricks that happen on apps and sites where people share posts, photos, and messages. This includes Instagram, Facebook, TikTok, Snapchat, X, WhatsApp, Discord, dating apps, and the chat inside online games. Scammers use these places because millions of people are there, and because people are relaxed and open when they are scrolling with friends."
      },
      {
       "t": "p",
       "text": "Social media gives scammers two big advantages. The first is information. Many people post their name, school, job, pets, hobbies, birthday, and travel plans. A scammer can read all of that and use it to sound like a friend or to guess your passwords and security questions. The second is trust. A message from a 'friend,' a post with thousands of likes, or an ad shown by the app itself can feel safe even when it is not."
      },
      {
       "t": "p",
       "text": "Some social media scams are fast, like a fake giveaway that steals your login in one click. Others are slow, like a romance or investment scam that builds for weeks or months before the scammer asks for money. The slow ones are often the most costly."
      },
      {
       "t": "p",
       "text": "Social media scams happen on apps like Instagram, Facebook, TikTok, Snapchat, WhatsApp, Discord, and in online games. Scammers use fake profiles, fake ads, and hacked accounts to build trust and then take your money, your photos, or your login."
      },
      {
       "t": "p",
       "text": "Social media is perfect for scammers because people share a lot about themselves. A scammer can learn your name, school, job, hobbies, and friends in minutes."
      }
     ]
    },
    {
     "key": "how",
     "title": "How the Scam Works",
     "blocks": [
      {
       "t": "p",
       "text": "Most social media scams work in one of two ways: take over an account, or build a relationship. Understanding both helps you see them coming."
      },
      {
       "t": "p",
       "lead": "Taking over an account.",
       "text": "The scammer gets into a real person's account, often by phishing or by using a leaked password. Then they message everyone on that person's friends list. Because the message comes from a known name, people trust it. Each victim who clicks gives the scammer another account, so the scam spreads like a chain reaction."
      },
      {
       "t": "p",
       "lead": "Building a relationship.",
       "text": "The scammer creates a fake profile with stolen photos and a made-up story. They send friendly messages, share 'personal' stories, and become part of your daily routine. Over time, you start to care about this person. Then a problem appears: an emergency, a business chance, or a fee. By then, the scammer has made it hard for you to say no."
      },
      {
       "t": "p",
       "text": "The lesson is the same in both: be careful about money requests and strange links, even when they come from someone who feels familiar."
      },
      {
       "t": "example",
       "title": "Example (hacked friend account)",
       "steps": [
        "A scammer hacks your friend's account.",
        "They message you: \"Hey!! Is this you in this video?? 😂 [link]\" or \"I'm stuck abroad and need money. Can you send $200? I'll pay you back.\"",
        "Because it looks like it came from a friend, you trust it.",
        "The link steals your login, so the scammer takes over your account and messages your friends. The scam spreads."
       ]
      },
      {
       "t": "example",
       "title": "Example (romance scam)",
       "steps": [
        "A \"handsome soldier\" or \"nice widow\" sends you a friendly message.",
        "Over weeks or months, they chat daily and say they love you.",
        "They can never meet in person or video chat.",
        "Then comes an emergency: a hospital bill, a plane ticket, a customs fee. They ask for money. After you pay, there is always another problem."
       ]
      }
     ]
    },
    {
     "key": "types",
     "title": "Most Common Types of Social Media Scams",
     "blocks": [
      {
       "t": "p",
       "text": "The scams below are the ones that appear most often on social media and in messaging apps. They look different on the surface, but they all depend on trust. A fake giveaway pretends to be a brand you like. A romance scam pretends to be a person who cares. An investment scam pretends to be an expert who wants to help. A hacked account pretends to be your friend."
      },
      {
       "t": "p",
       "text": "A few of these scams are very serious. Sextortion, which means threatening to share private images unless a victim pays, harms many teens and is a crime. The person doing it is responsible, not you. And long investment cons, sometimes called 'pig butchering,' can drain a person's savings over many weeks. If any of these scams feel familiar, read the sections on prevention and recovery carefully."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Fake Giveaways.",
         "text": "\"Share this post, tag 3 friends, and send us your address and card number to claim your free iPhone.\" Real giveaways never ask for payment info."
        },
        {
         "lead": "Romance Scams.",
         "text": "A fake profile builds a relationship over time, then asks for money. Photos are often stolen from real people."
        },
        {
         "lead": "Fake Online Stores and Ads.",
         "text": "An ad shows a cool product at a very low price. You pay, and nothing arrives, or a cheap fake does."
        },
        {
         "lead": "Investment and Crypto Scams.",
         "text": "Fake \"experts\" or \"traders\" promise huge profits. Sometimes they show you a fake app where your \"money\" is growing. When you try to withdraw it, they ask for more fees."
        },
        {
         "lead": "\"Pig Butchering.\"",
         "text": "A long-con version of the investment scam. The scammer slowly builds trust (often through a \"wrong number\" text or a friend request), then convinces you to invest in a fake platform."
        },
        {
         "lead": "Hacked Friend Accounts.",
         "text": "A friend's account sends you a strange link or asks for money."
        },
        {
         "lead": "Fake Influencer, Celebrity, and Brand Accounts.",
         "text": "Copycat accounts that ask you to pay for a prize, a collab, or a \"verified badge.\" Real brands do not ask you to pay for prizes."
        },
        {
         "lead": "Fake Customer Support.",
         "text": "You post a complaint, and a fake \"support\" account messages you first asking for your login or a payment."
        },
        {
         "lead": "Sextortion.",
         "text": "A stranger (often posing as a teen) sends photos and asks for yours. After you send one, they threaten to share it unless you pay or send more. This is a crime, and it is NOT your fault."
        },
        {
         "lead": "Marketplace Scams.",
         "text": "Fake buyers overpay with a fake check. Fake sellers take payment and vanish. Fake rentals ask for a deposit on a home that does not exist."
        },
        {
         "lead": "Job and Modeling Scams.",
         "text": "An easy remote job or modeling gig that asks for an upfront fee."
        },
        {
         "lead": "Gaming Scams.",
         "text": "Free in-game currency, free skins, or \"trade offers\" that steal your login. Fake \"game developers\" ask for your account."
        }
       ]
      }
     ]
    },
    {
     "key": "warning",
     "title": "Warning Signs",
     "blocks": [
      {
       "t": "p",
       "text": "On social media, the warning signs are often about the person or account, not just the message. Take a minute to look at who is really talking to you."
      },
      {
       "t": "p",
       "text": "Check the profile. A new account, few followers, few posts, or photos that all look professional can be signs of a fake. Check how fast things move. If someone you just met online says they love you, or asks to move the chat to a private app like WhatsApp or Telegram, be careful. Check what they avoid. Scammers usually refuse to video chat or meet, and have a new excuse every time. Check what they ask for. Requests for gift cards, crypto, wire transfers, or secrecy are major red flags. And check the promise. Anyone who guarantees profit or says an investment has 'no risk' is not telling the truth, because every investment has risk. Finally, a verified badge is not enough. Badges can be bought, and real accounts can be hacked."
      },
      {
       "t": "ul",
       "items": [
        "A new account with few posts, few followers, or many photos posted at once",
        "Photos that look too perfect, or are the same as photos on other accounts",
        "The person asks to move the chat to WhatsApp, Telegram, or Signal quickly",
        "They never video chat or always have an excuse",
        "Love comes fast and they ask for money",
        "Requests for gift cards, crypto, or wire transfers",
        "Guaranteed profits or \"no risk\" investments",
        "A friend's message that is out of character, or has a link with no context",
        "A message that says \"act now\"",
        "You are told not to tell anyone",
        "Verified badges can be bought. A badge alone is NOT proof of safety."
       ]
      }
     ]
    },
    {
     "key": "who",
     "title": "Who Is Targeted",
     "blocks": [
      {
       "t": "p",
       "text": "Social media scammers pick their targets by what each group wants or fears. Knowing this helps you spot the story before it reaches you."
      },
      {
       "t": "p",
       "text": "Teens spend lots of time on social media and in games, so scammers offer free in-game currency, fake giveaways, fake modeling or influencer deals, and friendly chats that turn into sextortion. If anyone threatens you, remember: it is a crime, it is not your fault, and the best step is to stop talking to them, save evidence, and tell a trusted adult. Adults are shown fake stores, marketplace scams, investment advice, and job offers. Seniors are often targeted by romance scams, hacked-friend scams, and fake charity requests. People who feel lonely can be especially at risk, because the scammer offers attention and care."
      },
      {
       "t": "p",
       "text": "A good rule for everyone: real love and real friendship never need gift cards, crypto, or a secret."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Teens:",
         "text": "Giveaway scams, fake influencer offers, gaming scams, and especially sextortion. If someone threatens you, stop talking to them, do not pay, take screenshots, and tell a trusted adult right away. You can also report at CyberTipline.org or call 1-800-843-5678 (NCMEC). Paying does not make it stop."
        },
        {
         "lead": "Adults:",
         "text": "Fake stores, marketplace scams, investment scams, and fake job offers."
        },
        {
         "lead": "Seniors:",
         "text": "Romance scams, hacked friend/family accounts, and fake charity or \"grandchild\" messages. Lonely people are often targeted, so remember that real love never asks for money."
        }
       ]
      }
     ]
    },
    {
     "key": "prevent",
     "title": "How to Prevent It",
     "blocks": [
      {
       "t": "p",
       "text": "You can enjoy social media and still stay safe. The key is to share less, check more, and keep your accounts locked down."
      },
      {
       "t": "p",
       "lead": "Lock down your accounts.",
       "text": "Use a different, strong password on each app, and turn on two-factor authentication. Set your profile to private if you can. Check your privacy settings every few months, since apps change them."
      },
      {
       "t": "p",
       "lead": "Share less.",
       "text": "Do not post your address, phone number, school schedule, or travel dates. Be careful about posts that answer common security questions, like your first pet or your first car."
      },
      {
       "t": "p",
       "lead": "Know your contacts.",
       "text": "Only accept requests from people you know. If you get a request from someone claiming to be a friend, check whether you are already connected. A second account with the same name is a common trick."
      },
      {
       "t": "p",
       "lead": "Check before you trust.",
       "text": "If a friend asks for money or sends a strange link, call or text them another way. Use a reverse image search to see if a profile photo is stolen. Research an online store before you buy."
      },
      {
       "t": "p",
       "lead": "Use a pause rule.",
       "text": "Wait at least 24 hours before sending money to someone you met online. A real friend will wait."
      },
      {
       "t": "ul",
       "items": [
        "Set your accounts to private and review who can see your posts.",
        "Do not accept requests from strangers.",
        "Share less. Do not post your birthday, address, school, or travel dates.",
        "Use 2FA and a unique password on every social account.",
        "If a friend asks for money or sends a strange link, call or text them another way to check.",
        "Reverse image search a profile photo (Google Lens or TinEye) to see if it is stolen.",
        "Research a store before buying: search its name plus \"scam\" or \"reviews\" on outside sites.",
        "Never send money, crypto, or gift cards to someone you have never met in person.",
        "Pay with a credit card or a protected payment method, not with direct transfers.",
        "Report and block fake accounts.",
        "Be careful with links in DMs, even from friends.",
        "Set a \"pause rule\": wait 24 hours before sending money to anyone online."
       ]
      }
     ]
    },
    {
     "key": "scammed",
     "title": "If You Were Scammed",
     "blocks": [
      {
       "t": "p",
       "text": "If you were scammed on social media, the first step is to stop. Do not send any more money, photos, or information, even if the scammer says you will lose what you already paid. That is a trick to keep you paying."
      },
      {
       "t": "p",
       "text": "Save everything you can: screenshots of the profile, messages, payment receipts, and links. This helps banks, apps, and investigators. If your own account was hacked, use the app's official hacked-account help page, change your password, turn on two-factor authentication, and warn your friends so they do not click on messages sent from your account. If you paid, call your bank or payment app right away."
      },
      {
       "t": "p",
       "text": "For sextortion, do not pay and do not send more. Paying rarely makes it stop. Save the evidence, block the person, report them to the app, and tell a trusted adult. If you are under 18, you can also report to the National Center for Missing & Exploited Children at CyberTipline.org. You are not in trouble. Finally, talk to someone. Scam victims are not foolish. These scams are run by professionals who study how to build trust."
      },
      {
       "t": "ol",
       "items": [
        "Stop all contact. Do not send more money.",
        "Save proof: screenshots, usernames, payment records.",
        "If your account was hacked, use the app's \"My account was hacked\" help page, change your password, and turn on 2FA.",
        "Warn your friends that your account was hacked.",
        "If you paid, call your bank or payment app right away.",
        "Report the account on the app and at ReportFraud.ftc.gov.",
        "For sextortion, do not pay, keep the evidence, and report to NCMEC (CyberTipline.org) and the platform.",
        "Talk to someone you trust. Scam victims are not stupid. These scams are built by professionals."
       ]
      }
     ]
    },
    {
     "key": "impact",
     "title": "Real-World Impact",
     "blocks": [
      {
       "t": "p",
       "text": "Social media scams can cost people a great deal of money, and they can also cost people their sense of safety. Romance and investment scams can take thousands of dollars, sometimes much more, because the scammer slowly raises the amounts. Fake stores and giveaways take smaller amounts but reach many more people."
      },
      {
       "t": "p",
       "text": "The emotional damage can be even harder than the money loss. A victim of a romance scam may feel they lost a real relationship. A teen who was threatened with private photos may feel scared and alone. A person whose account was hacked may lose years of photos and messages. These feelings are normal, and help is available. Talking to a friend, a family member, a school counselor, or a support group can make a big difference."
      },
      {
       "t": "p",
       "text": "Social media scams also hurt communities. Fake accounts spread lies, hacked accounts spread more scams, and trust between friends is damaged. Each report you make helps keep others safe."
      },
      {
       "t": "ul",
       "items": [
        "Large money losses, especially to romance and investment scams",
        "Hacked accounts and lost photos or memories",
        "Emotional harm: heartbreak, shame, and fear. For teens, sextortion can be very distressing. Help is available and it gets better.",
        "Fake accounts spread false information and hurt reputations",
        "Teens and young adults report losing money through social media more often than other age groups, while older victims often lose larger amounts"
       ]
      }
     ]
    },
    {
     "key": "takeaways",
     "title": "Key Takeaways",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Real love and real friends do not ask for gift cards or crypto.",
        "If a \"friend\" asks for money, verify another way.",
        "Be careful about what you share and who you accept.",
        "Sextortion is a crime, and the victim is never at fault. Tell an adult."
       ]
      }
     ]
    }
   ],
   "quiz": [
    {
     "q": "A friend messages you on Instagram asking for money because they are \"stuck.\" What should you do?",
     "options": [
      "Send the money right away",
      "Contact your friend another way (call or text) to check",
      "Click the link they sent",
      "Share it with others"
     ],
     "answer": 1,
     "why": "Always check with your friend another way."
    },
    {
     "q": "A \"giveaway\" account tells you to pay shipping with your card number to claim a free phone. This is:",
     "options": [
      "A normal giveaway",
      "A scam",
      "A tax refund",
      "A game reward"
     ],
     "answer": 1,
     "why": "Real giveaways never need your card number."
    },
    {
     "q": "Someone you met online says they love you but cannot video chat, and then asks for money for a plane ticket. This is MOST likely:",
     "options": [
      "A romance scam",
      "A true love story",
      "A work offer",
      "A bank alert"
     ],
     "answer": 0,
     "why": "Refusing video chats and asking for money are classic romance scam signs."
    },
    {
     "q": "True or False: A verified badge means the account is 100% safe.",
     "options": [
      "True",
      "False"
     ],
     "answer": 1,
     "why": "Badges can be bought, and accounts can be hacked."
    },
    {
     "q": "Someone threatens to share your private photo unless you pay. What is the BEST response?",
     "options": [
      "Pay so they stop",
      "Do not pay, stop talking to them, save evidence, and tell a trusted adult",
      "Send more photos",
      "Delete everything and tell no one"
     ],
     "answer": 1,
     "why": "Never pay. Stop contact, save proof, and get help."
    },
    {
     "q": "Which is a good way to check if a profile photo is stolen?",
     "options": [
      "Ask the person to send it again",
      "Use a reverse image search like Google Lens or TinEye",
      "Check the number of followers only",
      "Trust it if the account is private"
     ],
     "answer": 1,
     "why": "A reverse image search shows where else the photo appears."
    }
   ]
  },
  {
   "number": 6,
   "title": "Website Scams",
   "goals": [
    "Recognize fake shopping sites, fake login pages, and fake pop-up warnings",
    "Read a web address (URL) like a detective",
    "Know what the lock icon means (and does not mean)",
    "Shop and browse more safely"
   ],
   "sections": [
    {
     "key": "what",
     "title": "What It Is",
     "blocks": [
      {
       "t": "p",
       "text": "A website scam is a fake or hacked website made to steal money, passwords, or personal information. It can be a store that never ships anything, a copy of a bank's login page, or a pop-up that claims your device has a virus."
      },
      {
       "t": "p",
       "text": "Websites are easy to fake. With a few hours of work, a scammer can copy a real company's design, add stolen photos and made-up reviews, and put it online. Tools can even build a whole store in minutes. Scammers then use ads, search results, social media posts, and emails to lead people there."
      },
      {
       "t": "p",
       "text": "This is why a good-looking website is not proof of anything. The way a site looks is just design. What matters is the web address, how the site asks you to pay, and whether the company can be checked outside its own pages."
      },
      {
       "t": "p",
       "text": "A website scam uses a fake or hacked website to steal money, passwords, or personal information. The site might look very professional. Anyone can build a good-looking site in a few hours."
      }
     ]
    },
    {
     "key": "how",
     "title": "How the Scam Works",
     "blocks": [
      {
       "t": "p",
       "text": "Website scams follow a simple path: attract, convince, collect, disappear."
      },
      {
       "t": "p",
       "lead": "Attract.",
       "text": "The scammer needs visitors. They pay for ads, post on social media, or send emails and texts. Some even pay to appear at the top of search results, so a fake site may look like the first result for a store or customer service line."
      },
      {
       "t": "p",
       "lead": "Convince.",
       "text": "Once you land on the site, it must look real. Scammers use professional photos, fake reviews, countdown timers ('only 2 left!'), and logos from trusted payment companies. These tricks make you feel safe and rushed at the same time."
      },
      {
       "t": "p",
       "lead": "Collect.",
       "text": "The site asks for payment or personal details. A fake store takes your card number and money. A fake login page takes your password. A fake support page asks you to call a number or let someone fix your computer."
      },
      {
       "t": "p",
       "lead": "Disappear.",
       "text": "The store never ships, or sends something very cheap. The site may vanish and reappear under a new name. Meanwhile, your card details may be used or sold to others."
      },
      {
       "t": "example",
       "title": "Example (fake shopping site)",
       "steps": [
        "You see an ad on social media: \"Name-brand sneakers, 80% OFF, today only!\"",
        "You click and find a site with real-looking photos, reviews, and a countdown timer.",
        "You enter your card number and address.",
        "Either nothing arrives, or you get a cheap fake. Your card number may also be stolen and used elsewhere.",
        "When you try to contact support, there is no real contact info or no reply."
       ]
      }
     ]
    },
    {
     "key": "extra",
     "title": "How to Read a Web Address (URL)",
     "blocks": [
      {
       "t": "p",
       "text": "Learning to read a web address is one of the most useful safety skills you can have. Every web address has parts, and scammers hide in the parts people do not look at."
      },
      {
       "t": "p",
       "text": "The key part is the domain. It is the name just before the first single slash. In 'https://www.paypal.com/login,' the domain is paypal.com. Anything before the domain, such as 'www,' is a subdomain, which the owner can set to anything. So in 'https://paypal.com.secure-login.net/login,' the real domain is secure-login.net, which has nothing to do with PayPal. Scammers love this trick because many people only read the first word."
      },
      {
       "t": "p",
       "text": "A web address has parts. The most important part is the domain, which is just before the first single slash."
      },
      {
       "t": "ul",
       "items": [
        "https://www.paypal.com/login → real domain: paypal.com",
        "https://paypal.com.secure-login.net/login → real domain: secure-login.net (NOT PayPal)",
        "https://www.gooogle.com → extra \"o\" (typosquatting)",
        "https://amaz0n.com → zero instead of the letter \"o\""
       ]
      },
      {
       "t": "p",
       "text": "The rule: the last two parts before the first slash are the real owner of the site."
      }
     ]
    },
    {
     "key": "types",
     "title": "Most Common Types of Website Scams",
     "blocks": [
      {
       "t": "p",
       "text": "Website scams can be grouped by what the scammer wants from you. Some want your money for products you never receive. Some want your login. Some want you to call a phone number, which leads to a human scammer. Others want to put malware on your device."
      },
      {
       "t": "p",
       "text": "A warning for everyone: scam websites can appear in places that feel safe. Social media ads, sponsored search results, and links in group chats may all lead to fake sites. A site being advertised does not mean it was checked. The advertising platforms try to remove fake ads, but many get through before they are caught. Always check the site yourself before buying."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Fake Shopping Sites.",
         "text": "Prices that are too low. Items never arrive, or are fake."
        },
        {
         "lead": "Fake Login and Bank Pages.",
         "text": "Copies of real sites that steal your username and password."
        },
        {
         "lead": "Pop-Up Virus Warnings.",
         "text": "A loud, scary screen says \"Your device is infected! Call this number now.\" It is fake. The number leads to a scammer."
        },
        {
         "lead": "Typosquatting.",
         "text": "Sites with small spelling mistakes in the name, such as gooogle.com or faceb00k.com, waiting for typing errors."
        },
        {
         "lead": "Fake Charity Sites.",
         "text": "Often appear after a disaster, and ask for donations that go to scammers."
        },
        {
         "lead": "Fake Government Sites.",
         "text": "Pay-to-use copies of free services, such as passport renewals, tax forms, or benefits applications."
        },
        {
         "lead": "Fake Rental and Real Estate Listings.",
         "text": "A beautiful home at a low price. They want a deposit before you see it."
        },
        {
         "lead": "Fake Ticket and Event Sites.",
         "text": "Tickets that are not real or are sold twice."
        },
        {
         "lead": "Fake Download and \"Free Software\" Sites.",
         "text": "Free movies, games, or apps that come with malware."
        },
        {
         "lead": "Fake Tech Support Sites.",
         "text": "Appear when you search for customer service. They show a phone number that is not the real company's."
        },
        {
         "lead": "Fake Subscription Traps.",
         "text": "A \"free trial\" that quietly charges your card each month."
        },
        {
         "lead": "Scam Ads and Fake Search Results.",
         "text": "Sponsored results at the top of a search can lead to fake sites. Always check the address."
        }
       ]
      }
     ]
    },
    {
     "key": "warning",
     "title": "Warning Signs",
     "blocks": [
      {
       "t": "p",
       "text": "With websites, the warning signs are about trust you can check. A real business leaves traces: a physical address, a phone number, a return policy, a history, and reviews on other sites. A scam site tries to avoid being checked."
      },
      {
       "t": "p",
       "text": "Look at the address first. Is it spelled right? Does it end in something strange? Look at the price. If a famous brand is selling at a huge discount, that is not a sale. It is bait. Look at how they want to be paid. If the site only accepts gift cards, crypto, wire transfers, or direct payment apps, be very careful. Look at contact and policies. Missing contact details, no return policy, or copied text are bad signs. Look at reviews. A long list of perfect reviews that all sound the same may be fake. Search the store's name with the word 'scam' or 'reviews' on outside sites. And look at pop-ups. A pop-up that locks your screen or tells you to call a number is almost always a scam."
      },
      {
       "t": "ul",
       "items": [
        "The web address is misspelled, strange, or uses odd endings",
        "No contact information, no address, or no return policy",
        "Prices that are far too low, or a \"limited time\" countdown",
        "Only accepts gift cards, crypto, wire transfers, or payment apps",
        "Copied or stolen photos, and strange or badly written text",
        "A site that is brand new (check with a \"whois\" lookup)",
        "Reviews that are all 5 stars and sound alike",
        "Pop-ups that cannot be closed, or that lock your screen",
        "A website that asks for too much personal information (like your Social Security number) just to buy a product"
       ]
      }
     ]
    },
    {
     "key": "extra",
     "title": "The Lock Icon: What It Really Means",
     "blocks": [
      {
       "t": "p",
       "text": "The lock icon and https mean the connection between you and the site is encrypted, so others cannot spy on your data in transit. It does NOT mean the site is honest. Scammers can also get https and a lock for free. Always check the web address itself."
      }
     ]
    },
    {
     "key": "who",
     "title": "Who Is Targeted",
     "blocks": [
      {
       "t": "p",
       "text": "Website scams affect everyone who goes online, but the bait is different for each group."
      },
      {
       "t": "p",
       "text": "Teens are drawn by cheap sneakers, concert tickets, game currency, and free downloads. Many free-download sites hide malware. Adults are often caught by fake stores, fake rentals, fake government websites that charge for free services, and fake customer service numbers found in search results. Seniors often face scary pop-ups that say a virus has been found, or fake government and Medicare sites that ask for personal details."
      },
      {
       "t": "p",
       "text": "If a pop-up says your device is infected, do not call the number. Websites cannot truly see viruses on your device. Close the browser tab. If it will not close, restart your device. If you have a trusted family member or technician, ask them to check for you."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Teens:",
         "text": "Fake sneaker, concert ticket, and game currency sites. Free game or movie download sites that carry malware."
        },
        {
         "lead": "Adults:",
         "text": "Fake stores, fake rentals, fake tax and government sites, and fake customer service numbers."
        },
        {
         "lead": "Seniors:",
         "text": "Pop-up virus warnings, fake government and Medicare sites, and fake charity sites. If a pop-up locks your screen, do not call the number. Close the browser or restart the device."
        }
       ]
      }
     ]
    },
    {
     "key": "prevent",
     "title": "How to Prevent It",
     "blocks": [
      {
       "t": "p",
       "text": "The goal of website safety is to slow down at the moment of trust: right before you type a password or pay. At that moment, a few quick checks can protect you."
      },
      {
       "t": "p",
       "lead": "Check the address.",
       "text": "Read the domain slowly. For important sites, such as your bank, use a bookmark or type the address yourself."
      },
      {
       "t": "p",
       "lead": "Research the seller.",
       "text": "Search for the company name plus 'reviews' or 'scam.' Look for a real address and phone number. Be careful with brand-new sites."
      },
      {
       "t": "p",
       "lead": "Pay safely.",
       "text": "A credit card gives the strongest protection, since you can dispute charges. Avoid gift cards, wire transfers, crypto, and direct payment apps with sellers you do not know. Some people use a one-time virtual card number from their bank for new shops."
      },
      {
       "t": "p",
       "lead": "Use tools.",
       "text": "A password manager will not fill in on a fake site. Keep your browser and device updated. Use a pop-up blocker and a trusted antivirus tool."
      },
      {
       "t": "p",
       "lead": "Trust your instincts.",
       "text": "If a deal feels too good to be true, it usually is. It is fine to leave the site and think about it."
      },
      {
       "t": "ul",
       "items": [
        "Type the website address yourself, or use a saved bookmark for banks and stores.",
        "Check the domain carefully before entering any information.",
        "Research the seller: search the name plus \"reviews\" or \"scam\" on outside sites.",
        "Pay with a credit card. It gives better fraud protection than debit cards, gift cards, or wire transfers.",
        "Use official apps and sites to find customer service numbers.",
        "Use a password manager. It will not fill in on a fake site.",
        "Keep your browser and antivirus updated, and use a pop-up blocker.",
        "Do not download files or apps from sites you do not trust.",
        "Be careful on public Wi-Fi. Avoid banking or shopping unless you use a trusted network or VPN.",
        "Remember: if the deal sounds too good to be true, it probably is."
       ]
      }
     ]
    },
    {
     "key": "scammed",
     "title": "If You Were Scammed",
     "blocks": [
      {
       "t": "p",
       "text": "If you have used a fake website, stop entering more information and act on what you shared. The right steps depend on what the scammer got."
      },
      {
       "t": "p",
       "text": "If you gave a card number, call your card company right away, say it was fraud, and ask for the charge to be reversed and a new card to be sent. If you typed a password, change it everywhere you used it and turn on two-factor authentication. If a pop-up scared you and you called the number or gave access to your device, turn off the device, disconnect it from the internet, and ask a trusted technician to check it. Change your passwords from a different device."
      },
      {
       "t": "p",
       "text": "Watch your accounts and credit reports in the coming weeks. Report the site at ReportFraud.ftc.gov. You can also report fake ads to the platform that showed them, and report the site to its web host. Do not be afraid to tell family or friends. They may have seen the same site."
      },
      {
       "t": "ol",
       "items": [
        "Stop entering any more information.",
        "If you used a card, call your card company and dispute the charge. Ask for a new card.",
        "Change passwords on any account where you used the same one.",
        "If a pop-up scared you, close the browser (or restart your device) and run a security scan.",
        "If you called a fake number and gave remote access, turn off the device and have it checked.",
        "Report the site at ReportFraud.ftc.gov. You can also report it to the web host or search engine.",
        "Watch your accounts and credit reports for odd activity."
       ]
      }
     ]
    },
    {
     "key": "impact",
     "title": "Real-World Impact",
     "blocks": [
      {
       "t": "p",
       "text": "Website scams steal money in many ways. A fake store takes your payment and sends nothing. A fake bank page takes your login and drains your account. A fake support site charges you for fake repairs and may install malware on your computer."
      },
      {
       "t": "p",
       "text": "The damage often keeps going after the first loss. Stolen card numbers may be used for months, or sold to other criminals. Stolen passwords can be tried on your other accounts. Malware can quietly steal files and logins. If your information appears in a data leak, you may need to watch your credit for years."
      },
      {
       "t": "p",
       "text": "There is also a lost sense of trust. Some people stop shopping online or feel afraid of the internet. The goal is not to avoid the web, but to use it with good habits. A few simple checks can make you much harder to fool."
      },
      {
       "t": "ul",
       "items": [
        "Stolen card numbers and bank logins",
        "Money lost for products never delivered",
        "Devices infected with malware",
        "Stolen identities used to open accounts",
        "Lost trust in online shopping, and wasted time recovering accounts"
       ]
      }
     ]
    },
    {
     "key": "takeaways",
     "title": "Key Takeaways",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Read the web address like a detective.",
        "https and the lock icon do NOT mean a site is safe.",
        "A pop-up cannot really know your device is infected. Do not call the number.",
        "Pay by credit card when you can."
       ]
      }
     ]
    }
   ],
   "quiz": [
    {
     "q": "Which is the REAL owner of this site: https://paypal.com.secure-login.net/signin?",
     "options": [
      "paypal.com",
      "secure-login.net",
      "signin",
      "https"
     ],
     "answer": 1,
     "why": "The real owner is the last part before the first slash: secure-login.net."
    },
    {
     "q": "Does a lock icon prove a website is trustworthy?",
     "options": [
      "Yes, always",
      "No, it only shows the connection is encrypted",
      "Yes, if it is green",
      "Only on shopping sites"
     ],
     "answer": 1,
     "why": "The lock only means the connection is encrypted."
    },
    {
     "q": "A loud pop-up says your computer has a virus and tells you to call a number. You should:",
     "options": [
      "Call right away",
      "Close the browser or restart. Do not call",
      "Give remote access",
      "Pay for a fix"
     ],
     "answer": 1,
     "why": "Close it and do not call. It is a fake alert."
    },
    {
     "q": "True or False: Typosquatting is when scammers register website names with small spelling changes.",
     "options": [
      "True",
      "False"
     ],
     "answer": 0,
     "why": "Typosquatting uses small spelling errors."
    },
    {
     "q": "Which payment method gives the BEST protection when shopping online?",
     "options": [
      "Gift cards",
      "Wire transfer",
      "Credit card",
      "Cryptocurrency"
     ],
     "answer": 2,
     "why": "Credit cards offer stronger fraud protection."
    },
    {
     "q": "A store sells a $300 jacket for $25 and has no contact information. This is a:",
     "options": [
      "Great deal",
      "Warning sign of a fake shopping site",
      "Normal sale",
      "Safe purchase"
     ],
     "answer": 1,
     "why": "Very low prices and no contact info are red flags."
    }
   ]
  },
  {
   "number": 7,
   "title": "In-Person Scams",
   "goals": [
    "Recognize scams that happen face to face, at your door, on the street, and at machines",
    "Spot card skimmers and fake workers",
    "Practice saying \"no\" and walking away",
    "Know how to protect yourself and your home"
   ],
   "sections": [
    {
     "key": "what",
     "title": "What It Is",
     "blocks": [
      {
       "t": "p",
       "text": "In-person scams happen when a scammer deals with you face to face. They may knock on your door, approach you on the street, stand next to you at an ATM, or talk to you in a store or at an event. Because the scammer is right there, these scams use body language, a friendly face, and social pressure, not just words on a screen."
      },
      {
       "t": "p",
       "text": "Many people think scams only happen online. In fact, in-person scams are older than the internet, and they are still common. They also connect to the digital world. A scammer at the door may use a fake ID badge made with a printer. A skimmer at a gas pump steals card data that is then used online. A fake QR code sticker on a parking meter leads to a fake payment website."
      },
      {
       "t": "p",
       "text": "In-person scams can feel especially hard to resist. Most people want to be polite. We do not want to slam a door or walk away from someone who seems nice. Scammers know this and use it. The best defense is to practice saying 'no, thank you' until it feels natural."
      },
      {
       "t": "p",
       "text": "Not every scam happens on a screen. In-person scams happen when a scammer meets you face to face: at your front door, in a parking lot, at a store, or at an ATM. Scammers use charm, pressure, fake uniforms, and fake paperwork to get your money or access to your home."
      },
      {
       "t": "p",
       "text": "The tools are the same as in online scams: trust, urgency, and fear. The difference is that the scammer is standing right in front of you, which can make it harder to say no."
      }
     ]
    },
    {
     "key": "how",
     "title": "How the Scam Works",
     "blocks": [
      {
       "t": "p",
       "text": "In-person scammers use the same tools as online scammers: trust, urgency, and fear. But they have extra tools too. Understanding them helps you stay calm."
      },
      {
       "t": "p",
       "lead": "Looking the part.",
       "text": "A scammer may wear a uniform, a vest, or a badge, or carry a clipboard or a work truck sign. People tend to trust anyone who looks official. A uniform is not proof of anything."
      },
      {
       "t": "p",
       "lead": "Being friendly.",
       "text": "Scammers smile, make small talk, and compliment you. Friendliness lowers your guard. A real worker can be polite and still wait while you check them out."
      },
      {
       "t": "p",
       "text": "Creating a reason to hurry. They say the weather is about to change, the price is only good today, or a danger must be fixed now. Pressure makes it hard to check facts."
      },
      {
       "t": "p",
       "lead": "Using distraction.",
       "text": "In street scams, one person talks to you while another takes your wallet or watches your PIN."
      },
      {
       "t": "p",
       "lead": "Getting paid up front.",
       "text": "Many door-to-door scams ask for cash or a big deposit before any work is done, then the scammer leaves and never returns."
      },
      {
       "t": "example",
       "title": "Example (fake repair worker)",
       "steps": [
        "A friendly man knocks on your door. He says, \"We're doing roof work for your neighbor and noticed damage on your roof. I can fix it today for half price.\"",
        "He asks for a large cash payment up front to \"buy materials.\"",
        "He drives off with the money and never comes back. Or he does a poor job and then asks for more."
       ]
      },
      {
       "t": "example",
       "title": "Example (distraction scam)",
       "steps": [
        "A stranger at a store asks you for directions or points out something \"you dropped.\"",
        "While you are distracted, a partner takes your wallet, phone, or bag."
       ]
      }
     ]
    },
    {
     "key": "types",
     "title": "Most Common Types of In-Person Scams",
     "blocks": [
      {
       "t": "p",
       "text": "In-person scams fall into a few groups. Some happen at your home, where scammers want money or want to get inside. Some happen at machines and stores, where scammers steal card information. Some happen in public places, where scammers use distraction, fake charities, or fake deals. And some happen slowly, through a friendship or relationship, where a person gains trust and then takes advantage."
      },
      {
       "t": "p",
       "text": "In each case, think about what is being asked. Is the person asking for money up front? Do they want to enter your home? Do they want you to decide quickly? Do they want you to keep it secret? Those four questions can help you spot almost any in-person scam."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Door-to-Door Scams.",
         "text": "Fake repair workers, fake salespeople, or fake \"energy company\" agents ask for money upfront or try to get into your home."
        },
        {
         "lead": "Fake Officials.",
         "text": "Someone pretends to be police, a utility worker, a city inspector, or a bank employee to get inside your home or get your money."
        },
        {
         "lead": "Card Skimmers.",
         "text": "Hidden devices on ATMs, gas pumps, and store card readers that copy your card number. Tiny hidden cameras may record your PIN."
        },
        {
         "lead": "\"Shoulder Surfing.\"",
         "text": "Someone watches you type your PIN or password, or takes a photo of your screen."
        },
        {
         "lead": "Fake Charity Collectors.",
         "text": "Someone with a clipboard or a collection can collects \"donations\" for a cause that does not exist."
        },
        {
         "lead": "Distraction and Pickpocket Scams.",
         "text": "One person distracts you while another steals."
        },
        {
         "lead": "Fake Prize or Free Gift Scams.",
         "text": "\"You have been selected!\" You must pay a fee to get the prize, or attend a high-pressure sales event."
        },
        {
         "lead": "Tourist Scams.",
         "text": "Fake tour guides, friendship bracelets forced on your wrist, fake petitions, and \"closed\" attractions that send you to a different place."
        },
        {
         "lead": "Overpayment and Fake Check Scams.",
         "text": "A buyer gives you a check for more than the price and asks you to give back the difference in cash. The check later bounces."
        },
        {
         "lead": "Contractor and Home Improvement Scams.",
         "text": "Scammers take a deposit and never finish the job, or do bad work and demand more money."
        },
        {
         "lead": "Parking and \"Pay Here\" QR Scams.",
         "text": "Fake stickers with QR codes are placed on parking meters to send you to a fake payment site."
        },
        {
         "lead": "Fake Rideshare or Taxi Drivers.",
         "text": "A fake driver offers a ride to someone waiting at a pickup spot."
        },
        {
         "lead": "\"Helpful\" Strangers at ATMs.",
         "text": "Someone offers to \"help\" you and sees your PIN, or swaps your card."
        },
        {
         "lead": "Charity Wristband / Friendship Bracelet Tricks.",
         "text": "A person ties something to your wrist, then demands money."
        },
        {
         "lead": "Romance and Friendship Scams in Person.",
         "text": "A new \"friend\" or \"partner\" slowly asks for loans, gifts, or access to your accounts. This is common with isolated seniors."
        }
       ]
      }
     ]
    },
    {
     "key": "warning",
     "title": "Warning Signs",
     "blocks": [
      {
       "t": "p",
       "text": "With in-person scams, you need to notice both what the person says and how they act. Honest people are comfortable being checked. Scammers are not."
      },
      {
       "t": "p",
       "text": "The most important sign is pressure to decide right now. A real contractor will give a written estimate and let you think. A real charity will accept a donation tomorrow. Another sign is no proof: no ID, no business card, no license number, no company name on the truck. A third is payment demands, especially cash only, a large deposit, or payment to a person instead of a company. A fourth is secrecy, like 'do not tell your family' or 'do not call the company.' A fifth is unusual friendliness or closeness, such as touching your arm, standing too close, or getting you to talk about your finances. And watch the setting. A stranger at your door who says they 'noticed a problem' with your house is far more likely to be a scammer than a worker you hired. When you say, 'I need to check first,' watch what happens. A real professional will say, 'Of course.'"
      },
      {
       "t": "ul",
       "items": [
        "High pressure to decide right now",
        "\"Today only\" deals or a \"special price just for you\"",
        "No ID, no business card, or no company name on the truck or paperwork",
        "Demands for cash only, or for a large payment upfront",
        "A stranger who is too friendly, too fast, or who invades your personal space",
        "Someone who says \"don't tell anyone\", or does not want you to call anyone",
        "Workers who say they are \"in the neighborhood\" and just happened to notice a problem",
        "Loose, bulky, or odd parts on an ATM or card reader",
        "A stranger who stands too close at an ATM or while you pay",
        "A person who gets annoyed when you say, \"I need to check first\""
       ]
      }
     ]
    },
    {
     "key": "who",
     "title": "Who Is Targeted",
     "blocks": [
      {
       "t": "p",
       "text": "Everyone can meet an in-person scammer, but they choose their method by who they are speaking to."
      },
      {
       "t": "p",
       "text": "Seniors are often targeted at home, because scammers believe they are more likely to be there during the day and more likely to be polite. Fake repair workers, fake utility staff, and people who say they need to 'check something inside' are common. Adults are targeted with contractor scams, card skimmers, fake charity collectors, and overpayment scams when selling items. Teens and young adults may meet fake talent scouts, 'easy cash' job offers, ticket resellers, and strangers who offer gifts or rides. Travelers and tourists face pickpockets, fake guides, and forced 'friendship bracelet' tricks."
      },
      {
       "t": "p",
       "text": "If you are a teen, remember: a stranger who offers money, gifts, or a ride is a warning sign. Say no, move to a safe place, and tell a trusted adult. If you are caring for an older relative, check in often, help them set a rule that no stranger comes in without a call to family, and put a 'No Soliciting' sign on the door."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Teens:",
         "text": "Fake \"talent scouts,\" ticket resellers, and strangers who offer \"easy cash\" jobs. If an adult stranger offers you money, gifts, or a ride, say no and tell a parent or teacher. Never meet someone you only know online without a trusted adult."
        },
        {
         "lead": "Adults:",
         "text": "Contractor scams, skimmers, overpayment scams, and fake officials."
        },
        {
         "lead": "Seniors:",
         "text": "Door-to-door repair scams, fake utility workers, fake charity collectors, and people who gain trust slowly to take money or access to the home. Never feel rude saying no. A real company will understand."
        }
       ]
      }
     ]
    },
    {
     "key": "prevent",
     "title": "How to Prevent It",
     "blocks": [
      {
       "t": "p",
       "text": "Preventing in-person scams is about making it easy to say no and hard for the scammer to win. You do not need to be rude. You only need to be firm and have a plan."
      },
      {
       "t": "p",
       "lead": "Have a script.",
       "text": "Practice a short sentence you can use any time: 'Thank you, but I do not make decisions at the door. Please leave your information.' You do not have to explain or argue. Closing the door is not rude. It is safe."
      },
      {
       "t": "p",
       "lead": "Check before you act.",
       "text": "If someone says they are from a company, ask for ID and the company name. Then call the company using a number you find yourself. A real worker will wait. If there is no appointment, you do not have to let them in."
      },
      {
       "t": "p",
       "lead": "Control the money.",
       "text": "Never pay in full up front. Pay in steps as work is finished, and use a check or card, not cash. Get at least three written estimates for large jobs."
      },
      {
       "t": "p",
       "lead": "Protect your cards.",
       "text": "Look at ATMs and card readers before using them. Wiggle the card slot, check for loose parts, and cover your hand when you enter your PIN. Tap-to-pay and phone wallets are usually safer than swiping."
      },
      {
       "t": "p",
       "lead": "Stay aware.",
       "text": "Keep bags closed and in front of you. Walk away from anyone who is too pushy."
      },
      {
       "t": "sub",
       "text": "At home"
      },
      {
       "t": "ul",
       "items": [
        "Do not let strangers inside. Talk through the door or a screen door.",
        "Ask for ID and a company name. Then call the company (using a number you look up yourself) before letting anyone in. Real workers will wait.",
        "Never pay in full up front. Pay in steps as the work is finished. Pay by check or card, not cash.",
        "Get at least 3 written estimates for any job. Check reviews, licenses, and insurance.",
        "Do not sign anything on the spot.",
        "Put a \"No Soliciting\" sign on your door.",
        "Tell a trusted friend or family member about any big purchase or repair before you agree."
       ]
      },
      {
       "t": "sub",
       "text": "At ATMs and stores"
      },
      {
       "t": "ul",
       "items": [
        "Check the card slot and keypad. If anything looks loose, bulky, or mismatched, do not use it.",
        "Use ATMs inside banks or in well-lit, busy places.",
        "Cover the keypad when you type your PIN.",
        "Use tap-to-pay or mobile wallets when you can. They are safer than swiping.",
        "Do not let anyone \"help\" you at an ATM.",
        "Check your account often for charges you do not know."
       ]
      },
      {
       "t": "sub",
       "text": "On the street and while traveling"
      },
      {
       "t": "ul",
       "items": [
        "Keep your bag closed and in front of you.",
        "Be careful of strangers who approach with a story, petition, or a gift.",
        "Walk away from pressure. Say, \"No, thank you,\" and keep moving.",
        "Use official rides and check the car and driver in your app before getting in.",
        "Check parking meter and QR code stickers. Look for signs that a sticker was placed over the original."
       ]
      },
      {
       "t": "sub",
       "text": "A simple script"
      },
      {
       "t": "quote",
       "text": "\"Thank you, but I don't make decisions at the door. Please leave your information and I will call your company.\""
      }
     ]
    },
    {
     "key": "scammed",
     "title": "If You Were Scammed",
     "blocks": [
      {
       "t": "p",
       "text": "If you were scammed in person, your first goal is safety. If you feel threatened, or if the person is still nearby, move to a safe place and call 911. After that, think about what you gave the scammer and take steps to limit the harm."
      },
      {
       "t": "p",
       "text": "If you gave your card or PIN, call your bank right away and cancel the card. If you paid with a check, call your bank immediately to try to stop it. If you paid in cash, the money is very hard to recover, but you should still report it. Write down everything you remember while it is fresh: what the person looked like, what they said, the name of the company they used, any vehicle or license plate, and the time and place."
      },
      {
       "t": "p",
       "text": "Report the scam to your local police and to ReportFraud.ftc.gov. Older adults can also call the National Elder Fraud Hotline at 1-833-372-8311. If you found a skimmer, do not touch it. Tell the store or bank and call the police. Finally, tell a family member or friend. Scammers often return to people who paid, so having others aware can protect you."
      },
      {
       "t": "ol",
       "items": [
        "Get to safety. If you feel in danger, call 911.",
        "If you gave a card number or PIN, call your bank at once to cancel the card and freeze the account.",
        "If you paid by check, call your bank right away to try to stop the payment.",
        "If you gave cash, write down everything you remember: the person's description, car, license plate, time, and what they said.",
        "Report it to your local police and at ReportFraud.ftc.gov. Seniors can call the National Elder Fraud Hotline: 1-833-372-8311.",
        "If you found a skimmer, do not touch it. Tell the bank or store manager, and call the police.",
        "Tell a family member or friend. The scammer may come back, and your friends can help watch out for you."
       ]
      }
     ]
    },
    {
     "key": "impact",
     "title": "Real-World Impact",
     "blocks": [
      {
       "t": "p",
       "text": "In-person scams can cause direct loss of cash, savings, or home equity. A fake roofer can take thousands of dollars and leave behind damage. A skimmer can empty an account before the owner notices. A person who gains access to a home may take valuables or private papers."
      },
      {
       "t": "p",
       "text": "There is also a strong effect on safety and confidence. Victims of door-to-door scams may feel unsafe in their own homes, afraid to answer the door, or ashamed to tell anyone. For older adults, this can lead to less independence and more isolation, which scammers then use again."
      },
      {
       "t": "p",
       "text": "These scams also hurt communities. They make neighbors suspicious of honest workers and charities. Reporting what happened, and sharing it with neighbors, family, and local groups, can help stop the same person from returning to the same street."
      },
      {
       "t": "ul",
       "items": [
        "Stolen cash, card numbers, and savings",
        "Damage to your home from bad repair work",
        "Seniors and tourists are common targets",
        "Victims may feel unsafe in their own home, or ashamed",
        "Skimmed cards can be used for months before anyone notices"
       ]
      }
     ]
    },
    {
     "key": "takeaways",
     "title": "Key Takeaways",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Pressure is the biggest warning sign.",
        "Real workers, officials, and charities can wait while you check.",
        "Do not pay in full up front. Do not pay cash to a stranger.",
        "Saying \"no\" is not rude. It is smart."
       ]
      }
     ]
    }
   ],
   "quiz": [
    {
     "q": "A stranger says he is a utility worker and needs to come inside to check your meter. What should you do FIRST?",
     "options": [
      "Let him in so you are not rude",
      "Ask for ID and call the utility company using a number you look up yourself",
      "Give him cash",
      "Sign what he gives you"
     ],
     "answer": 1,
     "why": "Ask for ID and verify with the company using a number you look up yourself."
    },
    {
     "q": "What is a card skimmer?",
     "options": [
      "A special card that gives rewards",
      "A hidden device that copies your card information",
      "An ATM fee",
      "A card cleaning tool"
     ],
     "answer": 1,
     "why": "A skimmer secretly copies your card data."
    },
    {
     "q": "A contractor wants 100% payment upfront in cash for a roof repair. This is:",
     "options": [
      "A normal request",
      "A major warning sign",
      "A discount",
      "A tax rule"
     ],
     "answer": 1,
     "why": "Never pay in full up front, and avoid cash."
    },
    {
     "q": "True or False: It is rude to say no to a salesperson at your door.",
     "options": [
      "True",
      "False"
     ],
     "answer": 1,
     "why": "Saying no is safe and smart."
    },
    {
     "q": "Which is the BEST way to protect yourself at an ATM?",
     "options": [
      "Let a helpful stranger guide you",
      "Check for loose or odd parts and cover the keypad",
      "Say your PIN out loud",
      "Use any machine you see"
     ],
     "answer": 1,
     "why": "Check the machine and cover your PIN."
    },
    {
     "q": "Someone offers you a \"special price, today only\" and tells you not to talk to anyone about it. This is:",
     "options": [
      "A good deal",
      "A pressure tactic and a warning sign",
      "A normal sale",
      "A contest prize"
     ],
     "answer": 1,
     "why": "Pressure and secrecy are red flags."
    }
   ]
  },
  {
   "number": 8,
   "title": "AI Deepfakes (Extra Unit)",
   "goals": [
    "Explain what a deepfake is and how scammers use it",
    "Know the clues that can suggest a fake video, voice, or image",
    "Understand why \"spotting clues\" alone is not enough",
    "Use verification habits that work, even when the fake is perfect"
   ],
   "sections": [
    {
     "key": "what",
     "title": "What It Is",
     "blocks": [
      {
       "t": "p",
       "text": "A deepfake is a fake video, audio clip, or image created with artificial intelligence (AI) to look or sound like a real person. The word comes from 'deep learning,' a type of AI, and 'fake.' AI learns what a person's face and voice look like and sound like from many examples, and can then create new content that seems to show that person saying or doing something they never did."
      },
      {
       "t": "p",
       "text": "Some deepfakes are made for fun, art, or movies. But scammers and bullies use the same tools to trick people. As the tools get cheaper and easier, almost anyone can make a convincing fake with a few minutes of video or a few seconds of audio from social media."
      },
      {
       "t": "p",
       "text": "This changes an old rule. For a long time, 'seeing is believing.' Now seeing and hearing are no longer enough. This does not mean you should trust nothing. It means you need new habits for checking the things that matter, especially when someone asks for money, secrets, or fast action."
      },
      {
       "t": "p",
       "text": "A deepfake is a fake video, audio clip, or image made with artificial intelligence (AI) to look or sound like a real person. AI can copy a face, a voice, or a whole scene. Some deepfakes are made for jokes or movies. Scammers use them to trick people."
      },
      {
       "t": "p",
       "text": "Here is the most important thing to know: deepfakes are getting better fast. Clues that work today may not work next year. So this lesson teaches two things:"
      },
      {
       "t": "ol",
       "items": [
        "What to look and listen for (helpful, but not perfect)",
        "What to DO to confirm someone is real (this always works)"
       ]
      }
     ]
    },
    {
     "key": "how",
     "title": "How the Scam Works",
     "blocks": [
      {
       "t": "p",
       "text": "Deepfake scams combine a very old trick with new technology. The old trick is pretending to be someone you trust. The new technology makes that pretending much more convincing."
      },
      {
       "t": "p",
       "lead": "Step 1: Collect.",
       "text": "The scammer finds a sample of a person's voice or face. Social media videos, voicemail greetings, interviews, and recorded meetings are common sources. Even a short clip may be enough for a voice copy."
      },
      {
       "t": "p",
       "lead": "Step 2: Create.",
       "text": "Using AI tools, they build a fake voice or video that can say anything they type. Some tools can work live, changing a face or voice during a call."
      },
      {
       "t": "p",
       "lead": "Step 3: Contact.",
       "text": "The scammer calls, sends a video message, or joins a video meeting. The story is almost always urgent: an accident, an arrest, a secret deal, or a payment that must be made today."
      },
      {
       "t": "p",
       "lead": "Step 4: Pressure.",
       "text": "They ask you to act fast and keep it secret, which stops you from checking."
      },
      {
       "t": "p",
       "lead": "Step 5: Collect payment.",
       "text": "They ask for gift cards, wire transfers, or crypto. The scam works because we trust voices and faces we know."
      },
      {
       "t": "example",
       "title": "Example (voice clone emergency)",
       "steps": [
        "A scammer finds a short video of your daughter on social media, just a few seconds of her voice.",
        "They use AI to copy her voice.",
        "They call you at night. The voice is crying: \"Mom, I'm in trouble. I need money right now. Please don't tell Dad.\"",
        "You panic. A second \"officer\" comes on the line and says to send money by gift card or crypto.",
        "Your real daughter is safe at home, asleep."
       ]
      },
      {
       "t": "example",
       "title": "Example (fake video call from the boss)",
       "steps": [
        "An employee joins a video call with what looks like the CFO and other coworkers.",
        "Everyone on the call is an AI-generated fake except the employee.",
        "The \"CFO\" orders a large payment to a new account. The employee obeys."
       ]
      },
      {
       "t": "p",
       "text": "This type of scam has really happened to companies, and it caused very large losses."
      }
     ]
    },
    {
     "key": "types",
     "title": "Most Common Types of Deepfakes",
     "blocks": [
      {
       "t": "p",
       "text": "Deepfakes can be used in many ways. The most common in scams are voice cloning, fake video calls, and fake celebrity or expert videos. But AI-made images and fake documents are growing quickly too."
      },
      {
       "t": "p",
       "text": "It helps to separate deepfake harms into three groups. First are money scams, where a fake voice or face is used to get you to pay. Second are false information, where fake videos or images spread lies about public events, leaders, or products. Third are personal harms, where fake images of a real person are made to embarrass, bully, or blackmail them. All three are serious, and the last one is often aimed at teens. If anyone makes or shares a fake image of you, you are the victim, and you should tell a trusted adult and report it."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Voice Cloning.",
         "text": "AI copies a voice from a short audio or video clip. Used in fake \"family emergency\" calls, fake boss calls, and fake bank calls."
        },
        {
         "lead": "Face-Swap Videos.",
         "text": "A person's face is placed on another body in a video."
        },
        {
         "lead": "Live Deepfake Video Calls.",
         "text": "A fake face and voice appear on a live video call, such as Zoom or FaceTime."
        },
        {
         "lead": "AI-Generated Images.",
         "text": "Photos of people, places, or events that never existed. Used for fake profiles, fake news, and fake damage claims."
        },
        {
         "lead": "Fake Celebrity and Expert Endorsements.",
         "text": "A fake video of a celebrity, doctor, or news anchor promotes a scam product, supplement, or crypto site."
        },
        {
         "lead": "Fake News and Political Deepfakes.",
         "text": "False videos or audio of leaders saying things they never said, used to spread lies."
        },
        {
         "lead": "AI Profile Photos.",
         "text": "Faces that do not belong to any real person, used on fake social media and romance scam accounts."
        },
        {
         "lead": "Non-Consensual Fake Images.",
         "text": "Fake explicit images made of a real person, often used for bullying or blackmail (sextortion). This is a serious harm and is illegal in many places. If this happens to you, you are the victim, not at fault."
        },
        {
         "lead": "Fake Documents and IDs.",
         "text": "AI-made fake photos, receipts, or IDs used to open accounts or commit fraud."
        },
        {
         "lead": "Fake Customer Service Voices.",
         "text": "An AI voice that sounds like a real agent, calling you or answering when you call a fake number."
        }
       ]
      }
     ]
    },
    {
     "key": "extra",
     "title": "How to Spot a Deepfake: Clues to Look For",
     "blocks": [
      {
       "t": "p",
       "text": "The clues below can help you notice a fake. They are based on the kinds of mistakes AI often makes. But please remember two things. First, AI is improving quickly, and the best deepfakes have none of these problems. Second, a real video can look odd because of a bad camera or a poor connection. So use these clues to slow down and check, not as final proof."
      },
      {
       "t": "p",
       "text": "When you look at video or images, study the places where AI has the most trouble: the eyes, the mouth, the edges of the face, and the hands. In faces, look for blinking that seems wrong, lips that do not match the words, or blurry spots near the hair and jaw. Look at skin that seems too smooth and lighting that does not match the room. In images, look at hands, teeth, jewelry, glasses, and any writing in the background, since these often come out strange."
      },
      {
       "t": "p",
       "text": "When you listen to audio, notice the tone, the pauses, and the background. A cloned voice may sound a little flat, speak at an even pace, or have no natural room noise. But the strongest clue is often the message itself. If a call is urgent, emotional, and about money or secrecy, treat it as suspicious, even if the voice sounds exactly right."
      },
      {
       "t": "p",
       "text": "Remember: These clues can help, but a good deepfake may have none of them. A real video can also look strange because of poor quality. Use these clues as a reason to slow down and verify, not as proof."
      },
      {
       "t": "sub",
       "text": "In video and images"
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Eyes:",
         "text": "Strange blinking (too much or too little), eyes that do not follow the conversation, or odd reflections"
        },
        {
         "lead": "Mouth and teeth:",
         "text": "Lips that do not quite match the words, blurry or oddly shaped teeth"
        },
        {
         "lead": "Face edges:",
         "text": "Blurring, flickering, or a \"halo\" near the hairline, ears, jaw, or neck"
        },
        {
         "lead": "Skin and lighting:",
         "text": "Skin that looks too smooth or waxy, or lighting that does not match the room or the shadows"
        },
        {
         "lead": "Hands and details:",
         "text": "Extra or missing fingers, strange jewelry, glasses that merge into the face, melted-looking backgrounds, or garbled text on signs"
        },
        {
         "lead": "Movement:",
         "text": "Head and body that move a little stiffly, or a face that glitches when the person turns sideways or moves a hand in front of it"
        }
       ]
      },
      {
       "t": "sub",
       "text": "In audio and voice"
      },
      {
       "t": "ul",
       "items": [
        "A flat or odd tone, with little natural emotion",
        "Strange pauses, or a pace that feels too even",
        "No background noise, or noise that sounds fake",
        "Breathing that sounds off",
        "The voice repeats the same phrases or avoids answering direct questions"
       ]
      },
      {
       "t": "sub",
       "text": "In the message itself (often the BEST clue)"
      },
      {
       "t": "ul",
       "items": [
        "It is shocking, urgent, or emotional",
        "It asks for money, gift cards, crypto, or secrecy",
        "It asks you to skip normal steps or avoid calling anyone else",
        "The person cannot or will not answer a personal question or switch to a known number"
       ]
      }
     ]
    },
    {
     "key": "extra",
     "title": "What to DO: Verification Habits That Work",
     "blocks": [
      {
       "t": "p",
       "text": "Because deepfakes will keep getting better, your best protection is not a sharper eye. It is a set of steps that works even when the fake is perfect. The idea is simple: confirm the person through a different path that the scammer does not control."
      },
      {
       "t": "p",
       "text": "A scammer controls the call, the video, and the number that appears on your screen. They do not control the phone number saved in your contacts, the person's real social media account, a family safe word, or the company's official process. When you move the conversation to one of these, the scam usually falls apart."
      },
      {
       "t": "p",
       "text": "This is also why a family or workplace plan is so valuable. If everyone agrees ahead of time that money requests must be confirmed by a call-back or a safe word, it no longer matters how real the fake sounds. You are not trying to win a contest with the technology. You are using a process the technology cannot beat."
      },
      {
       "t": "p",
       "text": "These steps work even when the fake is perfect."
      },
      {
       "t": "ol",
       "items": [
        "Pause. Fear and urgency are the scammer's tools. Take a deep breath.",
        "Hang up and call back using the number saved in your phone, not the number that called you.",
        "Use a family safe word. Pick a secret word or phrase that only your family knows. If a \"relative\" calls in an emergency, ask for it. Do not share it online or in text.",
        "Ask a personal question only the real person would know, and not something that can be found online. (Not \"What's your dog's name?\" if it is on social media.)",
        "Test a video call. Ask the person to turn their head sideways, wave a hand in front of their face, hold up a random object, or write a word on paper. Many fakes struggle with this. Not all, so do not rely on it alone.",
        "Verify through a second channel. If your \"boss\" asks for a payment on video, confirm by calling them or by using a known company process.",
        "Follow company rules for money. Large payments need a second person to approve, no matter who is asking.",
        "Reverse image search. Use Google Lens or TinEye to find where a photo came from.",
        "Check the source. Is the same story reported by trusted news sites? Is the video on the person's real, verified account?",
        "Look for labels. Many platforms now label AI-made content. Content credentials (a kind of digital label) are also growing.",
        "Think about motive. Who benefits if you believe this and act on it?",
        "When in doubt, do not send money. A real emergency can survive a 5-minute call-back."
       ]
      }
     ]
    },
    {
     "key": "who",
     "title": "Who Is Targeted",
     "blocks": [
      {
       "t": "p",
       "text": "Deepfakes can target anyone, but the form they take depends on who you are."
      },
      {
       "t": "p",
       "text": "Teens may face fake images used for bullying or blackmail, fake celebrity giveaways, and fake profiles with AI-made faces. Never create or share fake images of other people. It can seriously hurt them, and it may be against the law. If you are targeted, save the evidence, do not pay, and tell a trusted adult. Adults, especially people who work with money, may face fake video calls and voice calls that appear to come from a boss, a client, or a bank. Seniors are often targeted with cloned voices of children or grandchildren in an 'emergency,' because the voice triggers a strong wish to help."
      },
      {
       "t": "p",
       "text": "No one is too smart or too careful to be fooled by a good fake. The answer is not to feel guilty. It is to prepare, with a safe word, a call-back habit, and a family conversation before an emergency happens."
      },
      {
       "t": "ul",
       "items": [
        {
         "lead": "Teens:",
         "text": "Fake images and videos used in bullying, fake celebrity giveaways, AI \"friends\" and fake profiles, and sextortion with fake images. If someone shares or threatens to share a fake image of you, tell a trusted adult. Do not pay. Report it to the platform and to the National Center for Missing & Exploited Children (CyberTipline.org) if you are under 18. Also, never create or share fake images of classmates. It can cause serious harm and may be a crime."
        },
        {
         "lead": "Adults:",
         "text": "Fake boss calls, fake video meetings, fake investment videos, and fake job interviews."
        },
        {
         "lead": "Seniors:",
         "text": "Cloned voices of grandchildren or children in emergency calls, and fake videos of trusted figures. Remember: a voice you know is no longer proof that it is that person. The safe word is your best defense."
        }
       ]
      }
     ]
    },
    {
     "key": "prevent",
     "title": "How to Prevent Deepfake Scams",
     "blocks": [
      {
       "t": "p",
       "text": "Preventing deepfake scams has two parts: make yourself harder to copy, and make yourself harder to fool."
      },
      {
       "t": "p",
       "lead": "Be harder to copy.",
       "text": "Keep social media accounts private when you can. Think before posting long videos or voice clips, especially of children and older relatives. Do not post your voicemail greeting in public places. This will not stop every scammer, but it makes their work harder."
      },
      {
       "t": "p",
       "lead": "Be harder to fool.",
       "text": "Set up a family safe word today. Choose a word or phrase that is not on social media and is easy to remember. Agree that no money is sent for an emergency unless the safe word is given or the person is reached on a known number. At work, agree on a rule that large payments or changes to payment details need a second person to approve, no matter who is asking."
      },
      {
       "t": "p",
       "text": "Slow down and share carefully. Before you share a shocking video, check whether trusted news sources report it. When you see an AI label or content credential, notice it. And teach others. The more people know about voice cloning, the less power the scam has."
      },
      {
       "t": "ul",
       "items": [
        "Set up a family safe word today.",
        "Limit what you post. Short voice and video clips can be used to copy you. Keep accounts private and share only with people you know.",
        "Do not trust a voice or face alone when money or private info is involved.",
        "Never send money because of a call, voice message, or video message alone.",
        "Use 2FA, and never read a code to someone who contacted you.",
        "Learn the clues, but trust the verification steps more.",
        "Pause before sharing shocking videos or images. Check the source first.",
        "Report fake content to the platform. Report scams at ReportFraud.ftc.gov.",
        "Talk about it. Tell your family, friends, and coworkers about voice cloning so they are ready."
       ]
      }
     ]
    },
    {
     "key": "scammed",
     "title": "If You Were Scammed or Targeted",
     "blocks": [
      {
       "t": "p",
       "text": "If you were targeted by a deepfake scam, the steps are similar to other scams, with a few extras. First, stop all contact and do not send more money. If you paid, call your bank or payment service right away and tell them it was fraud. The faster you call, the better the chance of stopping or recovering the payment."
      },
      {
       "t": "p",
       "text": "Save everything: call logs, recordings, screenshots, links, and messages. Report the scam at ReportFraud.ftc.gov and ic3.gov, and report the fake content to the platform where it appeared. If it happened at work, tell your manager and your IT or security team immediately, since the same scammer may be trying others."
      },
      {
       "t": "p",
       "text": "If a fake image or video of you was made or shared, you are the victim. Tell a trusted adult, keep records, and report it to the platform so it can be removed. If you are under 18, you can also use the National Center for Missing & Exploited Children's tools. Many places now have laws against this kind of abuse, and there are groups that help people remove harmful images. Do not carry this alone."
      },
      {
       "t": "ol",
       "items": [
        "Stop contact. Do not send more money.",
        "Call your bank or card company right away if you paid. Ask for a recall or fraud review.",
        "Save proof: screenshots, call logs, and links.",
        "Report it at ReportFraud.ftc.gov and ic3.gov, and to the platform where it appeared.",
        "Warn your family and set up a safe word.",
        "If a fake image of you was made or shared, tell a trusted adult, report it to the platform, and keep records. Many places now have laws against this, and there are organizations that help remove such images."
       ]
      }
     ]
    },
    {
     "key": "impact",
     "title": "Real-World Impact",
     "blocks": [
      {
       "t": "p",
       "text": "The impact of deepfakes goes beyond individual scams. Families have lost money to cloned voices, and companies have lost very large payments to fake video meetings. Each time, the victim was not careless. The scam was designed to be believable."
      },
      {
       "t": "p",
       "text": "Deepfakes also spread false information. A fake video of a public figure can change opinions or start panic before anyone has time to check. Fake images used for bullying and blackmail can cause serious emotional harm, especially to young people."
      },
      {
       "t": "p",
       "text": "Over time, there is another cost: the more fakes exist, the harder it is to trust real things. A person caught doing something wrong might claim a real video is 'just AI.' This is why good habits matter. Check the source, use a second way to confirm important things, and talk with family and friends. These steps protect you, and they help keep truth and trust alive in the community."
      },
      {
       "t": "ul",
       "items": [
        "Money stolen using cloned voices and fake video calls",
        "False news that can hurt reputations and influence opinions",
        "Harm from fake images, especially to teens and women",
        "A growing problem: it gets harder to trust what we see and hear. This is why good habits matter more than good eyes."
       ]
      }
     ]
    },
    {
     "key": "takeaways",
     "title": "Key Takeaways",
     "blocks": [
      {
       "t": "ul",
       "items": [
        "Seeing and hearing are no longer proof.",
        "Clues help, but verification is what protects you.",
        "A family safe word is a simple, powerful tool.",
        "Slow down when a message is urgent and asks for money or secrecy."
       ]
      }
     ]
    }
   ],
   "quiz": [
    {
     "q": "What is a deepfake?",
     "options": [
      "A computer virus",
      "AI-made fake video, audio, or images that look or sound like a real person",
      "A type of spam email",
      "A fake website"
     ],
     "answer": 1,
     "why": "A deepfake is AI-made fake media of a real person."
    },
    {
     "q": "You get a call from your \"grandchild\" crying and asking for money. The voice sounds exactly right. What is the BEST first step?",
     "options": [
      "Send the money. It sounds like them",
      "Hang up and call your grandchild on their saved number, or ask for the family safe word",
      "Keep it secret as they asked",
      "Give your bank info"
     ],
     "answer": 1,
     "why": "Verify by calling back on a known number or using the safe word."
    },
    {
     "q": "Which is the MOST reliable way to protect yourself from a deepfake scam?",
     "options": [
      "Look for blinking problems only",
      "Use verification steps like calling back and using a safe word",
      "Trust the voice",
      "Believe any video with good quality"
     ],
     "answer": 1,
     "why": "Verification works even if the fake is perfect."
    },
    {
     "q": "True or False: If a video looks perfect, it must be real.",
     "options": [
      "True",
      "False"
     ],
     "answer": 1,
     "why": "Good deepfakes can look perfect."
    },
    {
     "q": "On a video call, which action might help reveal a live deepfake?",
     "options": [
      "Ask the person to turn their head sideways or wave a hand in front of their face",
      "Ask them to speak louder",
      "Turn off your camera",
      "Share your password"
     ],
     "answer": 0,
     "why": "Many fakes glitch with side turns and hand movement, but do not rely on this alone."
    },
    {
     "q": "What is a family safe word?",
     "options": [
      "A password for your phone",
      "A secret word only your family knows, used to confirm identity in emergencies",
      "A word to post on social media",
      "A bank code"
     ],
     "answer": 1,
     "why": "A private word shared only within your family."
    },
    {
     "q": "You see a video of a famous doctor promoting a \"miracle cure\" and asking you to buy through a link. What should you do?",
     "options": [
      "Buy it right away",
      "Check trusted news and the doctor's official channels, and be skeptical",
      "Share it with friends",
      "Send your health info"
     ],
     "answer": 1,
     "why": "Check official sources. Fake celebrity and expert endorsements are common scams."
    }
   ]
  }
 ],
 "final": {
  "instructions": "Instructions: There are 20 questions. Choose the best answer. Check your answers with the key at the end. A score of 16 or more (80%) is a pass.",
  "passMark": 16,
  "guide": [
   {
    "min": 18,
    "label": "Scam-Safe Expert"
   },
   {
    "min": 16,
    "label": "Pass. You know the basics well"
   },
   {
    "min": 12,
    "label": "Review the units you missed and try again"
   },
   {
    "min": 0,
    "label": "Reread the lessons, practice with a friend, and retake the test"
   }
  ],
  "questions": [
   {
    "q": "Smishing is phishing by:",
    "options": [
     "Phone call",
     "Text message",
     "Email",
     "Website"
    ],
    "answer": 1
   },
   {
    "q": "Which action is SAFEST when you get a text saying your package is stuck?",
    "options": [
     "Click the link",
     "Reply \"STOP\"",
     "Check the carrier's official app or website yourself",
     "Call the number in the text"
    ],
    "answer": 2
   },
   {
    "q": "Spear phishing is aimed at:",
    "options": [
     "Everyone at once",
     "One specific person, using details about them",
     "Only banks",
     "Only seniors"
    ],
    "answer": 1
   },
   {
    "q": "What tool helps protect your account even if a scammer gets your password?",
    "options": [
     "A longer email",
     "Two-factor authentication (2FA)",
     "A new phone case",
     "A bigger screen"
    ],
    "answer": 1
   },
   {
    "q": "A caller says you must pay a fine with gift cards or be arrested. This is:",
    "options": [
     "A normal government process",
     "A scam",
     "A court notice",
     "A tax refund"
    ],
    "answer": 1
   },
   {
    "q": "Caller ID can be faked.",
    "options": [
     "True",
     "False"
    ],
    "answer": 0
   },
   {
    "q": "What should you do first if your \"bank\" calls and asks you to move money to a safe account?",
    "options": [
     "Move it right away",
     "Hang up and call the number on the back of your card",
     "Share your PIN",
     "Stay on the line and obey"
    ],
    "answer": 1
   },
   {
    "q": "Which email address is MOST suspicious?",
    "options": [
     "help@amazon.com",
     "help@amaz0n-support.net",
     "support@microsoft.com",
     "info@yourschool.edu"
    ],
    "answer": 1
   },
   {
    "q": "Ransomware is:",
    "options": [
     "A free app",
     "Software that locks your files until you pay",
     "A spam filter",
     "A browser"
    ],
    "answer": 1
   },
   {
    "q": "A friend's social media account asks you for money. You should:",
    "options": [
     "Send it right away",
     "Contact your friend another way to confirm",
     "Click the link",
     "Share the message"
    ],
    "answer": 1
   },
   {
    "q": "Someone who says they love you online but never video chats and asks for money is probably running:",
    "options": [
     "A work offer",
     "A romance scam",
     "A survey",
     "A giveaway"
    ],
    "answer": 1
   },
   {
    "q": "The real owner of https://amazon.com.deals-today.net/login is:",
    "options": [
     "amazon.com",
     "deals-today.net",
     "login",
     "https"
    ],
    "answer": 1
   },
   {
    "q": "A lock icon in the browser means the website is trustworthy.",
    "options": [
     "True",
     "False"
    ],
    "answer": 1
   },
   {
    "q": "The best payment method for online shopping is:",
    "options": [
     "Gift card",
     "Wire transfer",
     "Credit card",
     "Crypto"
    ],
    "answer": 2
   },
   {
    "q": "A door-to-door contractor wants full payment in cash upfront. You should:",
    "options": [
     "Pay to get a discount",
     "Say no, check the company, get written estimates, and pay in steps",
     "Let him inside",
     "Sign right away"
    ],
    "answer": 1
   },
   {
    "q": "A hidden device that copies your card at an ATM is called a:",
    "options": [
     "Skimmer",
     "Router",
     "Hot spot",
     "Cache"
    ],
    "answer": 0
   },
   {
    "q": "What is a deepfake?",
    "options": [
     "A typo",
     "AI-made fake video, audio, or images of a real person",
     "A new phone",
     "A kind of password"
    ],
    "answer": 1
   },
   {
    "q": "What is the BEST way to confirm an \"emergency\" call from a relative who sounds right?",
    "options": [
     "Trust the voice",
     "Hang up, call their known number, or ask for the family safe word",
     "Send money first, ask later",
     "Keep it secret"
    ],
    "answer": 1
   },
   {
    "q": "Which is a sign of almost every scam in this course?",
    "options": [
     "Calm and patient tone",
     "Pressure to act fast, secrecy, or unusual payment methods",
     "Clear contact information",
     "Free time to think"
    ],
    "answer": 1
   },
   {
    "q": "If you think you have been scammed, what should you do?",
    "options": [
     "Keep quiet out of embarrassment",
     "Stop contact, contact your bank if money was involved, save proof, report it, and tell someone you trust",
     "Send more money to fix it",
     "Delete everything"
    ],
    "answer": 1
   }
  ],
  "checklist": {
   "title": "The Scam-Safe Checklist",
   "intro": "Before you act on any message, call, or visit, ask yourself:",
   "items": [
    "Did I expect this?",
    "Is someone rushing me or scaring me?",
    "Do they want money, a code, or a password?",
    "Are they asking for gift cards, crypto, or a wire?",
    "Did they ask me to keep a secret?",
    "Can I check using a number or website I found myself?"
   ]
  }
 },
 "rules": {
  "title": "The 4 Main Rules of Scam Safety",
  "intro": "These rules work for almost every scam in this course.",
  "items": [
   {
    "lead": "STOP.",
    "text": "Scammers want you to rush. Take a breath before you act."
   },
   {
    "lead": "CHECK.",
    "text": "Contact the real company or person using a phone number or website you look up yourself. Never use the number or link in the message."
   },
   {
    "lead": "NEVER SHARE",
    "text": "passwords, PINs, or one-time codes with anyone who contacts you first."
   },
   {
    "lead": "TALK.",
    "text": "Tell a friend, family member, or teacher. Scammers want you to stay quiet and alone."
   }
  ]
 },
 "resources": {
  "title": "Where to Report Scams (United States)",
  "items": [
   {
    "label": "FTC",
    "value": "ReportFraud.ftc.gov"
   },
   {
    "label": "FBI Internet Crime Complaint Center",
    "value": "ic3.gov"
   },
   {
    "label": "Scam texts",
    "value": "forward to 7726 (SPAM)"
   },
   {
    "label": "Phishing emails",
    "value": "forward to reportphishing@apwg.org"
   },
   {
    "label": "National Elder Fraud Hotline",
    "value": "1-833-FRAUD-11 (1-833-372-8311)"
   },
   {
    "label": "Do Not Call Registry",
    "value": "donotcall.gov"
   },
   {
    "label": "Your bank or card company",
    "value": "use the number on the back of your card"
   }
  ]
 }
};
const UNITS = COURSE.units;
const FINAL_TEST = COURSE.final;
const SAFETY_RULES = COURSE.rules;
const REPORT_RESOURCES = COURSE.resources;
