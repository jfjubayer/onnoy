const courseLessons = {
  overview: {
    storageKey: 'onnoy_lesson_overview',
    eyebrow: 'Digital Citizenship',
    title: 'Level 1: Digital Citizenship Course',
    subtitle: 'A colorful self-paced course that prepares students for safer, wiser, and more responsible digital life.',
    nextHref: 'module-attention-literacy.html',
    callout: {
      label: 'Course Map',
      title: 'Five short lessons. One stronger digital mindset.',
      body: 'Level 1 is not about memorizing rules. It helps students notice attention traps, verify information, avoid scams, use AI carefully, and build daily habits that protect judgment.'
    },
    activity: {
      title: 'Try this before you start',
      body: 'Write one sentence: "The online habit I most want to improve is..." Keep that answer in mind while moving through each lesson.'
    },
    sections: [
      {
        label: '01',
        title: 'What You Will Learn',
        body: 'Level 1 covers the core digital citizenship skills students need before starting Level 2 missions.',
        points: ['Attention Literacy: how apps, feeds, and algorithms compete for your time.', 'Misinformation: how to pause, verify, and avoid spreading false claims.', 'Scam Safety: how to spot phishing links, OTP traps, and fake offers.', 'AI and Mindset: how to use AI with human judgment, not blind trust.']
      },
      {
        label: '02',
        title: 'How Level 2 Unlocks',
        body: 'After finishing all Level 1 checks in this browser, students can start Level 2 missions. Official recognition is still reviewed manually by Onnoy.',
        points: ['Mission 1: Spot the Lie.', 'Mission 2: Scam Alert.', 'Mission 3: AI Integrity Check.', 'Mission 4: Invite 1-5 acquaintances to complete the course.']
      },
      {
        label: '03',
        title: 'How Progress Works',
        body: 'Progress is saved in this browser with localStorage. Use the same browser and device if you want the Level 2 gate to remember your progress.',
        points: ['Each page has a mini-activity and a quiz.', 'All quiz questions must be correct to complete the page.', 'If progress disappears, revisit each lesson and complete the quiz again.']
      }
    ],
    checks: [
      {
        question: 'What is the main goal of Level 1?',
        options: [
          ['Build safer digital habits and prepare for Level 2 missions', true],
          ['Collect social media passwords', false],
          ['Make students stop using the internet forever', false]
        ]
      },
      {
        question: 'When does Level 2 unlock in this browser?',
        options: [
          ['After all five Level 1 pages are completed', true],
          ['After opening only the overview page', false],
          ['After submitting a contact form', false]
        ]
      }
    ]
  },
  attention: {
    storageKey: 'onnoy_lesson_attention',
    eyebrow: 'Lesson 1',
    title: 'Attention Literacy',
    subtitle: 'Learn how screens, feeds, and algorithms compete for your attention.',
    prevHref: 'module-overview.html',
    nextHref: 'module-misinformation.html',
    image: 'assets/images/modules/algorithm-loop.png',
    imageAlt: 'Algorithm loop showing view tracking, emotion prediction, personalized content, and infinite scroll.',
    callout: {
      label: 'Attention Budget',
      title: 'Your attention is limited, valuable, and trainable.',
      body: 'This module shows a lifetime as 80 blocks. A typical person may spend about 16.7 years on screens. Reclaiming even 2 hours a day can return years of meaningful waking life.'
    },
    activity: {
      title: 'Try this now',
      body: 'Open your phone screen-time report. Notice your top app from yesterday. Ask: "Did I choose this time, or did the feed choose it for me?"'
    },
    sections: [
      {
        label: '01',
        title: 'Your Attention Has a Budget',
        body: 'This lesson frames life as 80 blocks. A typical person may spend about 16.7 years on screens. Reclaiming even 2 hours each day can return years of useful waking life.',
        points: ['Ask if your phone was the first thing you touched today.', 'Notice when a 10-minute break becomes 30 minutes.', 'Treat attention like time, money, and health.']
      },
      {
        label: '02',
        title: 'The Late-Night Loop',
        body: 'A common pattern starts with "one quick reel" at night and ends much later with tired eyes and lost sleep. This is not only a willpower issue; the product is built to keep attention moving.',
        points: ['Autoplay removes stopping points.', 'Infinite scroll hides how much time passed.', 'Emotional posts make the next tap feel urgent.']
      },
      {
        label: '03',
        title: 'The Algorithm Is Doing Its Job',
        body: 'Feeds track what you watch, predict emotion, and show more of what keeps you scrolling. This is why doomscrolling is a design outcome, not only a willpower problem.',
        points: ['Tap Not Interested on low-value posts.', 'Search intentionally for skills and learning.', 'Follow creators who improve your life.']
      }
    ],
    checks: [
      {
        question: 'Which habit trains your feed in a healthier direction?',
        options: [
          ['Searching for topics you want to learn', true],
          ['Opening every shocking post immediately', false],
          ['Scrolling until you feel tired', false]
        ]
      },
      {
        question: 'What makes infinite scroll risky?',
        options: [
          ['It removes natural stopping points', true],
          ['It blocks all videos', false],
          ['It always improves sleep', false]
        ]
      },
      {
        question: 'What is a good first step when your phone use feels automatic?',
        options: [
          ['Pause and ask why you picked it up', true],
          ['Open more apps quickly', false],
          ['Ignore screen-time patterns', false]
        ]
      }
    ]
  },
  misinformation: {
    storageKey: 'onnoy_lesson_misinformation',
    eyebrow: 'Lesson 2',
    title: 'Misinformation',
    subtitle: 'Separate mistakes from manipulation, then verify before sharing.',
    prevHref: 'module-attention-literacy.html',
    nextHref: 'module-scam-safety.html',
    image: 'assets/images/modules/sift.png',
    imageAlt: 'SIFT fact-checking framework: Stop, Investigate, Find Better, Trace.',
    callout: {
      label: 'Before You Share',
      title: 'Strong emotion is a warning light.',
      body: 'Fear, anger, and excitement can push people to share too fast. SIFT gives students a short routine: Stop, Investigate, Find better coverage, and Trace the claim.'
    },
    activity: {
      title: 'Try this now',
      body: 'Think of one viral post you saw this week. Name the claim, the source, and one better place you could check it before sharing.'
    },
    sections: [
      {
        label: '01',
        title: 'Misinformation vs Disinformation',
        body: 'Misinformation is false information shared unknowingly. Disinformation is false information created to deceive, manipulate, or harm.',
        points: ['A fake remedy shared by a helpful friend is misinformation.', 'A fake news screenshot designed to trigger panic is disinformation.', 'Both can hurt real people.']
      },
      {
        label: '02',
        title: 'Why False News Moves Fast',
        body: 'False claims often travel quickly because they fit echo chambers and trigger outrage. Algorithms may reward posts that create strong reactions, even when the claim is weak.',
        points: ['Old photos can be reused as new events.', 'Edited screenshots can look official.', 'Local names and places can be added to foreign videos.']
      },
      {
        label: '03',
        title: 'Use SIFT',
        body: 'Pause when a post creates fear, anger, or excitement. Then check source credibility, find better coverage, and trace the claim back to its original context.',
        points: ['Read past the headline.', 'Check dates and locations.', 'Watch for fake URLs and edited screenshots.']
      }
    ],
    checks: [
      {
        question: 'What should you do first when a post makes you angry or scared?',
        options: [
          ['Stop before sharing', true],
          ['Forward it with a question mark', false],
          ['Argue in comments immediately', false]
        ]
      },
      {
        question: 'What is disinformation?',
        options: [
          ['False information created to deceive or harm', true],
          ['Any post with a long caption', false],
          ['A true story from a newspaper', false]
        ]
      },
      {
        question: 'Which action is part of SIFT?',
        options: [
          ['Trace the claim to its original context', true],
          ['Share first and check later', false],
          ['Trust the headline only', false]
        ]
      }
    ]
  },
  scams: {
    storageKey: 'onnoy_lesson_scams',
    eyebrow: 'Lesson 3',
    title: 'Scam Safety',
    subtitle: 'Spot phishing links, OTP traps, hacked-friend scams, and fake websites.',
    prevHref: 'module-misinformation.html',
    nextHref: 'module-ai-mindset.html',
    image: 'assets/images/modules/fake-link.png',
    imageAlt: 'Real link versus fake link comparison with misspellings and suspicious domains.',
    callout: {
      label: '5-Second Rule',
      title: 'Scams rush you so you skip thinking.',
      body: 'Urgency, fear, free rewards, and fake authority are common scam triggers. A five-second pause can stop a stolen account, lost money, or leaked OTP.'
    },
    activity: {
      title: 'Try this now',
      body: 'Look at a recent promotional message. Before clicking, identify the real domain, the sender, and what the message wants you to do.'
    },
    sections: [
      {
        label: '01',
        title: 'Scams Use Emotion',
        body: 'Scammers push urgency, panic, free rewards, and fake authority. The Free Fire diamond example shows how a fake login page can steal an account.',
        points: ['Do not enter passwords after clicking reward links.', 'Never share OTP codes.', 'Call a friend directly before sending money.']
      },
      {
        label: '02',
        title: 'Look Closely at Links',
        body: 'Fake links often use misspellings, number substitutions, suspicious subdomains, or copied designs. A site can look real and still be dangerous.',
        points: ['Check the real domain, not only the page design.', 'Avoid unsafe APKs and game mods.', 'Use 2FA on important accounts.']
      },
      {
        label: '03',
        title: 'Common Digital Hijacks',
        body: 'Many scams are simple social tricks. A hacked friend may ask for urgent money, a fake support page may ask for login details, or an unsafe APK may steal files.',
        points: ['No bank or company should ask for your OTP.', 'Verify money requests through a direct call.', 'Do not install game mods from unknown sources.']
      }
    ],
    checks: [
      {
        question: 'A friend messages "Claim 5,000 diamonds free" and asks you to log in. Best response?',
        options: [
          ['Do not log in; verify with the friend directly', true],
          ['Enter your password quickly before offer ends', false],
          ['Share the link with classmates', false]
        ]
      },
      {
        question: 'Which link sign is suspicious?',
        options: [
          ['Misspellings or number substitutions in the domain', true],
          ['A familiar color scheme', false],
          ['A short paragraph on the page', false]
        ]
      },
      {
        question: 'What should you do with an OTP?',
        options: [
          ['Keep it private and never share it', true],
          ['Send it to anyone who says they are support', false],
          ['Post it in a group chat', false]
        ]
      }
    ]
  },
  ai: {
    storageKey: 'onnoy_lesson_ai',
    eyebrow: 'Lesson 4',
    title: 'AI and Mindset',
    subtitle: 'Use AI as a tool, not a replacement for judgment.',
    prevHref: 'module-scam-safety.html',
    nextHref: 'level-2-missions.html',
    image: 'assets/images/modules/ai-dark-side.png',
    imageAlt: 'Helpful and harmful AI examples including education, deepfakes, misinformation, bias, and overdependence.',
    callout: {
      label: 'Human Judgment',
      title: 'AI can help. Humans remain responsible.',
      body: 'AI predicts patterns from data. It can draft, summarize, and translate, but it can also invent facts, mirror bias, and produce convincing misinformation.'
    },
    activity: {
      title: 'Try this now',
      body: 'Ask an AI tool for a factual answer, then verify that answer with one trusted source. Notice whether the AI gave evidence or only sounded confident.'
    },
    sections: [
      {
        label: '01',
        title: 'AI Predicts, It Does Not Know',
        body: 'AI can summarize, translate, recognize patterns, and generate drafts. It can also hallucinate facts, invent sources, mirror bias, and sound confident when wrong.',
        points: ['Verify important facts outside AI.', 'Use AI for drafts, not final judgment.', 'Watch for deepfakes and manipulated media.']
      },
      {
        label: '02',
        title: 'Helpful and Harmful Uses',
        body: 'AI can support education, translation, accessibility, diagnosis, and flood prediction. The same technology can also create deepfakes, fake images, biased decisions, and manipulation.',
        points: ['Ask what the AI output is based on.', 'Check whether people may be harmed by sharing it.', 'Use AI to support thinking, not replace it.']
      },
      {
        label: '03',
        title: 'Critical Thinking Is the Core Skill',
        body: 'Critical thinking means asking questions, checking evidence, and thinking before reacting. Daily habits like the First 10 Rule protect attention and judgment.',
        points: ['No phone for the first 10 minutes after waking.', 'Question quick answers and trends.', 'Keep real-life offline activities in your week.']
      }
    ],
    checks: [
      {
        question: 'What is safest when AI gives an important fact?',
        options: [
          ['Verify it with trusted sources', true],
          ['Trust it because it sounds confident', false],
          ['Share it before checking', false]
        ]
      },
      {
        question: 'What is an AI hallucination?',
        options: [
          ['A confident answer that includes false or invented information', true],
          ['A verified source list from a library', false],
          ['A phone notification sound', false]
        ]
      },
      {
        question: 'What is the best role for AI in student work?',
        options: [
          ['Helper for drafts and ideas, with human checking', true],
          ['Replacement for all judgment', false],
          ['Source that never needs verification', false]
        ]
      }
    ]
  }
};

const missions = {
  spotLie: {
    storageKey: 'onnoy_mission_spot_lie',
    title: 'Mission 1: Spot the Lie',
    subtitle: 'Find five pieces of misinformation and show how you checked them.',
    prevHref: 'level-2-missions.html',
    nextHref: 'mission-scam-alert.html',
    type: 'form',
    formAction: 'https://formspree.io/f/xwvyyoqr',
    intro: 'Identify five pieces of misinformation. Upload your screenshots or PDFs in one place, then use numbered notes to explain each example.',
    guidelineTitle: 'Spot the Lie Rules',
    guidelineItems: [
      'Acceptable evidence: screenshots, image files, PDFs, source links, or video links.',
      'Submit screenshots/PDFs with the upload field. Paste video links and source links in the notes box.',
      'In the notes box, number each example 1-5 and explain what claim you found, why it may be false, and how you checked it.',
      'Hide private information before uploading. Do not submit passwords, OTPs, NID/card numbers, private messages, or harmful content.'
    ],
    notesPlaceholder: '1. Category: false claim / old image / edited screenshot / fake quote\nSource or video link:\nWhy it belongs here:\nHow I checked it:\n\n2. Category:\nSource or video link:\nWhy it belongs here:\nHow I checked it:'
  },
  scamAlert: {
    storageKey: 'onnoy_mission_scam_alert',
    title: 'Mission 2: Scam Alert',
    subtitle: 'Find five scams or suspicious messages and show your evidence.',
    prevHref: 'mission-spot-the-lie.html',
    nextHref: 'mission-ai-integrity.html',
    type: 'form',
    formAction: 'https://formspree.io/f/xwvyyoqr',
    intro: 'Identify five scams, suspicious links, or suspicious messages. Upload your screenshots or PDFs in one place, then use numbered notes to explain each example.',
    guidelineTitle: 'Scam Alert Rules',
    guidelineItems: [
      'Acceptable evidence: screenshots, image files, PDFs, suspicious links, message links, or video links.',
      'Submit screenshots/PDFs with the upload field. Paste video links, website links, and message details in the notes box.',
      'In the notes box, number each example 1-5 and explain the scam sign, what it asks people to do, and how you checked it.',
      'Hide private information before uploading. Do not submit passwords, OTPs, NID/card numbers, payment details, private messages, or live scam credentials.'
    ],
    notesPlaceholder: '1. Category: fake offer / phishing link / impersonation / payment scam\nSource or video link:\nWhy it belongs here:\nHow I checked it:\n\n2. Category:\nSource or video link:\nWhy it belongs here:\nHow I checked it:'
  },
  aiIntegrity: {
    storageKey: 'onnoy_mission_ai_integrity',
    title: 'Mission 3: AI Integrity Check',
    subtitle: 'Find five AI-related misinformation examples and show your checks.',
    prevHref: 'mission-scam-alert.html',
    nextHref: 'mission-digital-guardian.html',
    type: 'form',
    formAction: 'https://formspree.io/f/xwvyyoqr',
    intro: 'Identify five AI-generated or AI-assisted misinformation examples. Upload your screenshots or PDFs in one place, then use numbered notes to explain each example.',
    guidelineTitle: 'AI Integrity Check Rules',
    guidelineItems: [
      'Acceptable evidence: screenshots, image files, PDFs, AI output links, source links, or video links.',
      'Submit screenshots/PDFs with the upload field. Paste video links and AI/source links in the notes box.',
      'In the notes box, number each example 1-5 and explain whether it is AI-generated, AI-assisted, or AI-claimed, why it is risky, and how you verified it.',
      'Hide private information before uploading. Do not submit passwords, OTPs, NID/card numbers, private chats, or harmful synthetic content.'
    ],
    notesPlaceholder: '1. Category: AI image / AI text / fake source / deepfake claim\nSource or video link:\nWhy it belongs here:\nHow I checked it:\n\n2. Category:\nSource or video link:\nWhy it belongs here:\nHow I checked it:'
  },
  guardian: {
    storageKey: 'onnoy_mission_guardian',
    title: 'Mission 4: Digital Guardian Claim',
    subtitle: 'Invite 1-5 acquaintances to complete the course, then submit your claim.',
    prevHref: 'mission-ai-integrity.html',
    nextHref: 'modules.html',
    type: 'referral',
    formAction: 'https://formspree.io/f/xaqvvobg'
  }
};

const lessonOrder = ['overview', 'attention', 'misinformation', 'scams', 'ai'];
const missionOrder = ['spotLie', 'scamAlert', 'aiIntegrity', 'guardian'];

function isComplete(key) {
  return localStorage.getItem(key) === 'complete';
}

function setComplete(key) {
  localStorage.setItem(key, 'complete');
}

function buildPageNav(prevHref, nextHref, nextText = 'Next') {
  const nav = document.createElement('div');
  nav.className = 'module-page-nav';
  if (prevHref) nav.innerHTML += `<a class="btn btn-outline module-outline" href="${prevHref}">Back</a>`;
  if (nextHref) nav.innerHTML += `<a class="btn btn-green" href="${nextHref}">${nextText} →</a>`;
  return nav;
}

function renderLesson() {
  const root = document.querySelector('[data-lesson]');
  if (!root) return;
  const lesson = courseLessons[root.dataset.lesson];
  if (!lesson) return;

  const status = isComplete(lesson.storageKey) ? 'Complete' : 'Not complete';
  root.innerHTML = `
    <section class="module-shell">
      <div>
        <div class="module-kicker">${lesson.eyebrow}</div>
        <h2>${lesson.title}</h2>
        <p class="module-lead">${lesson.subtitle}</p>
      </div>
      <div class="module-status-pill">${status}</div>
    </section>
  `;

  if (lesson.callout) {
    const callout = document.createElement('section');
    callout.className = 'module-callout';
    callout.innerHTML = `
      <div class="module-callout-label">${lesson.callout.label}</div>
      <h3>${lesson.callout.title}</h3>
      <p>${lesson.callout.body}</p>
    `;
    root.appendChild(callout);
  }

  lesson.sections.forEach((section) => {
    const block = document.createElement('section');
    block.className = 'module-content-card';
    block.innerHTML = `
      <div class="module-section-label">${section.label || ''}</div>
      <h3>${section.title}</h3>
      <p>${section.body}</p>
      <ul>${section.points.map((point) => `<li>${point}</li>`).join('')}</ul>
    `;
    root.appendChild(block);
  });

  if (lesson.image) {
    const figure = document.createElement('figure');
    figure.className = 'module-visual';
    figure.innerHTML = `<img src="${lesson.image}" alt="${lesson.imageAlt}">`;
    root.appendChild(figure);
  }

  if (lesson.activity) {
    const activity = document.createElement('section');
    activity.className = 'module-activity';
    activity.innerHTML = `
      <div class="module-activity-icon" aria-hidden="true">?</div>
      <div>
        <h3>${lesson.activity.title}</h3>
        <p>${lesson.activity.body}</p>
      </div>
    `;
    root.appendChild(activity);
  }

  const check = document.createElement('section');
  check.className = 'module-check';
  const checks = lesson.checks || [lesson.check];
  const answered = new Set();
  check.innerHTML = `<h3>Quick Check</h3><p>Answer all questions correctly to complete this lesson.</p><div class="module-quiz"></div><p class="module-feedback" aria-live="polite"></p>`;
  const quiz = check.querySelector('.module-quiz');
  const feedback = check.querySelector('.module-feedback');

  checks.forEach((item, index) => {
    const question = document.createElement('div');
    question.className = 'module-quiz-question';
    question.innerHTML = `
      <p class="module-question-text">${index + 1}. ${item.question}</p>
      <div class="module-options"></div>
    `;
    const options = question.querySelector('.module-options');

    item.options.forEach(([text, correct]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = text;
      button.addEventListener('click', () => {
        question.querySelectorAll('button').forEach((btn) => {
          btn.classList.remove('is-correct', 'is-wrong');
        });

        if (!correct) {
          button.classList.add('is-wrong');
          feedback.textContent = 'Try again. Pause, reread the lesson, and choose the safest answer.';
          feedback.className = 'module-feedback danger';
          return;
        }

        button.classList.add('is-correct');
        answered.add(index);
        question.querySelectorAll('button').forEach((btn) => {
          btn.disabled = true;
        });

        if (answered.size === checks.length) {
          setComplete(lesson.storageKey);
          feedback.textContent = 'Completed. Progress saved in this browser.';
          feedback.className = 'module-feedback success';
          root.querySelector('.module-status-pill').textContent = 'Complete';
          return;
        }

        feedback.textContent = `${answered.size} of ${checks.length} correct. Keep going.`;
        feedback.className = 'module-feedback success';
      });
      options.appendChild(button);
    });

    quiz.appendChild(question);
  });
  root.appendChild(check);
  root.appendChild(buildPageNav(lesson.prevHref, lesson.nextHref));
}

function renderHubProgress() {
  const courseList = document.getElementById('courseProgress');
  if (courseList) {
    courseList.innerHTML = lessonOrder.map((id) => {
      const lesson = courseLessons[id];
      return `<li><span>${lesson.title}</span><strong>${isComplete(lesson.storageKey) ? 'Complete' : 'Open'}</strong></li>`;
    }).join('');
  }

  const level2Gate = document.getElementById('level2Gate');
  if (level2Gate) {
    const ready = lessonOrder.every((id) => isComplete(courseLessons[id].storageKey));
    level2Gate.classList.toggle('is-locked', !ready);
    level2Gate.querySelector('a').setAttribute('aria-disabled', String(!ready));
    level2Gate.querySelector('p').textContent = ready
      ? 'Level 2 is unlocked in this browser. Start the missions.'
      : 'Finish all five Level 1 pages in this browser to unlock Level 2.';
  }

  const missionList = document.getElementById('missionProgress');
  if (missionList) {
    missionList.innerHTML = missionOrder.map((id) => {
      const mission = missions[id];
      return `<li><span>${mission.title}</span><strong>${isComplete(mission.storageKey) ? 'Complete' : 'Open'}</strong></li>`;
    }).join('');
  }
}

function renderMission() {
  const root = document.querySelector('[data-mission]');
  if (!root) return;
  const missionId = root.dataset.mission;
  const mission = missions[missionId];
  if (!mission) return;

  root.innerHTML = `
    <section class="module-shell">
      <div class="module-kicker">Level 2</div>
      <h2>${mission.title}</h2>
      <p class="module-lead">${mission.subtitle}</p>
      <div class="module-status-pill">${isComplete(mission.storageKey) ? 'Submitted for final review' : 'Manual review happens after all missions'}</div>
    </section>
  `;

  const levelOneDone = lessonOrder.every((id) => isComplete(courseLessons[id].storageKey));
  if (!levelOneDone) {
    const gate = document.createElement('section');
    gate.className = 'module-check';
    gate.innerHTML = '<h3>Level 2 Locked</h3><p>Complete all five Level 1 pages in this browser before starting missions.</p>';
    root.appendChild(gate);
    root.appendChild(buildPageNav('modules.html', 'module-overview.html', 'Start Level 1'));
    return;
  }

  const currentIndex = missionOrder.indexOf(missionId);
  const priorMissionsDone = currentIndex <= 0 || missionOrder.slice(0, currentIndex).every((id) => isComplete(missions[id].storageKey));
  if (!priorMissionsDone) {
    const gate = document.createElement('section');
    gate.className = 'module-check';
    gate.innerHTML = '<h3>Mission Locked</h3><p>Complete the earlier Level 2 missions in this browser before opening this one.</p>';
    root.appendChild(gate);
    root.appendChild(buildPageNav(mission.prevHref, 'level-2-missions.html', 'Mission List'));
    return;
  }

  if (mission.type === 'quiz') {
    const block = document.createElement('section');
    block.className = 'module-check';
    block.innerHTML = `<h3>Scenario</h3><p>${mission.scenario}</p><h3>${mission.question}</h3><div class="module-options"></div><p class="module-feedback" aria-live="polite"></p>`;
    const options = block.querySelector('.module-options');
    const feedback = block.querySelector('.module-feedback');
    mission.options.forEach(([text, correct]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = text;
      button.addEventListener('click', () => {
        if (!correct) {
          feedback.textContent = 'Try again. Use SIFT and verify before acting.';
          feedback.className = 'module-feedback danger';
          return;
        }
        setComplete(mission.storageKey);
        feedback.textContent = 'Mission completed in this browser.';
        feedback.className = 'module-feedback success';
        block.querySelectorAll('button').forEach((btn) => (btn.disabled = true));
      });
      options.appendChild(button);
    });
    root.appendChild(block);
  }

  if (mission.type === 'form') {
    root.appendChild(buildMissionForm(mission, false));
  }

  if (mission.type === 'referral') {
    root.appendChild(buildReferralForm(mission));
  }

  root.appendChild(buildPageNav(mission.prevHref, mission.nextHref, mission.type === 'referral' ? 'Finish' : 'Next Mission'));
}

function buildMissionForm(mission, referralMode) {
  const section = document.createElement('section');
  section.className = 'module-form-card';
  const guideline = mission.guidelineItems
    ? `
      <div class="mission-guidelines">
        <h4>${mission.guidelineTitle || 'Mission Rules'}</h4>
        <ul>${mission.guidelineItems.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
    `
    : '';
  section.innerHTML = `<h3>Submit for Review</h3>${guideline}<p>${mission.intro || 'Send this to Onnoy for manual review.'}</p><p>Team Onnoy will manually review all mission submissions together at the end. You can continue to the next mission after submitting this form.</p>`;
  const form = document.createElement('form');
  form.action = mission.formAction;
  form.method = 'POST';
  form.enctype = 'multipart/form-data';
  form.innerHTML = `
    <input type="hidden" name="_subject" value="${mission.title}">
    <input type="hidden" name="mission_title" value="${mission.title}">
    <div class="form-group"><label class="form-label" for="unique_id">Unique ID *</label><input class="form-control" id="unique_id" name="unique_id" required></div>
    <div class="form-group"><label class="form-label" for="student_name">Name *</label><input class="form-control" id="student_name" name="student_name" required></div>
    <div class="form-group"><label class="form-label" for="student_email">Email Address *</label><input class="form-control" id="student_email" name="student_email" type="email" required></div>
    <div class="form-group">
      <label class="form-label" for="evidence_files">Screenshots or PDF Files *</label>
      <input class="form-control" id="evidence_files" name="evidence_files" type="file" accept="image/*,.pdf" multiple required>
      <p class="mission-upload-help">Select all screenshots/images/PDFs for this mission at once. Video files are not accepted here; paste video links in the notes box.</p>
    </div>
    <div class="form-group">
      <label class="form-label" for="evidence_notes">Numbered Evidence Notes *</label>
      <textarea class="form-control" id="evidence_notes" name="evidence_notes" rows="10" placeholder="${mission.notesPlaceholder || '1. Category:\nSource or video link:\nWhy it belongs here:\nHow I checked it:'}" required></textarea>
    </div>
  `;
  const buttonText = referralMode ? 'Submit Recognition Claim' : 'Submit Mission for Review';
  form.innerHTML += `<button class="btn btn-green full-submit" type="submit">${buttonText} →</button>`;
  form.addEventListener('submit', () => setComplete(mission.storageKey));
  section.appendChild(form);
  return section;
}

function buildReferralForm(mission) {
  const section = document.createElement('section');
  section.className = 'module-form-card';
  section.innerHTML = `
    <h3>Official Recognition Claim</h3>
    <p>Submit 1-5 acquaintances who completed the course. Onnoy manually verifies. 1-4 approved referrals earn Responsible Digital Citizen. 5 approved referrals earn Guardian.</p>
  `;
  const form = document.createElement('form');
  form.action = mission.formAction;
  form.method = 'POST';
  form.innerHTML = `
    <input type="hidden" name="_subject" value="Mission 4 Digital Guardian Claim">
    <div class="form-group"><label class="form-label" for="student_name">Your Name *</label><input class="form-control" id="student_name" name="student_name" required></div>
    <div class="form-group"><label class="form-label" for="student_contact">Your Email or Phone *</label><input class="form-control" id="student_contact" name="student_contact" required></div>
  `;
  for (let i = 1; i <= 5; i += 1) {
    form.innerHTML += `
      <div class="referral-row">
        <div class="form-group"><label class="form-label" for="ref_${i}_name">Acquaintance ${i} Name${i === 1 ? ' *' : ''}</label><input class="form-control" id="ref_${i}_name" name="ref_${i}_name" ${i === 1 ? 'required' : ''}></div>
        <div class="form-group"><label class="form-label" for="ref_${i}_contact">Acquaintance ${i} Contact${i === 1 ? ' *' : ''}</label><input class="form-control" id="ref_${i}_contact" name="ref_${i}_contact" ${i === 1 ? 'required' : ''}></div>
      </div>
    `;
  }
  form.innerHTML += '<button class="btn btn-green full-submit" type="submit">Submit Recognition Claim →</button>';
  form.addEventListener('submit', () => setComplete(mission.storageKey));
  section.appendChild(form);
  return section;
}

document.addEventListener('DOMContentLoaded', () => {
  renderLesson();
  renderHubProgress();
  renderMission();
});
