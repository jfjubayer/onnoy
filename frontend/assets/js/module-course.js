const courseLessons = {
  overview: {
    storageKey: 'onnoy_lesson_overview',
    eyebrow: 'Digital Citizenship',
    title: 'Level 1: Digital Citizenship Course',
    subtitle: 'A self-paced online lesson that replaces the live session and prepares students for Level 2 missions.',
    nextHref: 'module-attention-literacy.html',
    sections: [
      {
        title: 'What Students Complete',
        body: 'Level 1 has five pages: this overview, Attention Literacy, Misinformation, Scam Safety, and AI/Mindset. Each page ends with a small interactive check so students do more than read.',
        points: ['Understand how apps shape attention.', 'Verify claims before sharing.', 'Recognize scams and harmful online activity.', 'Use AI with human judgment.', 'Build simple daily digital balance habits.']
      },
      {
        title: 'How Level 2 Unlocks',
        body: 'After finishing all Level 1 checks in this browser, students can start Level 2 missions. Official recognition is still reviewed manually by Onnoy.',
        points: ['Mission 1: Spot the Lie.', 'Mission 2: Scam Alert.', 'Mission 3: AI Integrity Check.', 'Mission 4: Invite 1-5 acquaintances to complete the course.']
      }
    ],
    check: {
      question: 'What is the goal of Level 1?',
      options: [
        ['To replace the live session with an online course', true],
        ['To collect social media passwords', false],
        ['To make students stop using the internet', false]
      ]
    }
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
    sections: [
      {
        title: 'Your Attention Has a Budget',
        body: 'One slide shows life as 80 blocks. A typical person may spend about 16.7 years on screens. Reclaiming even 2 hours each day can return years of useful waking life.',
        points: ['Check whether your phone was the first thing you touched today.', 'Notice when a 10-minute break becomes 30 minutes.', 'Treat attention like time, money, and health.']
      },
      {
        title: 'The Algorithm Is Doing Its Job',
        body: 'Feeds track what you watch, predict emotion, and show more of what keeps you scrolling. This is why doomscrolling is a design outcome, not only a willpower problem.',
        points: ['Tap Not Interested on low-value posts.', 'Search intentionally for skills and learning.', 'Follow creators who improve your life.']
      }
    ],
    check: {
      question: 'Which habit trains your feed in a healthier direction?',
      options: [
        ['Searching for topics you want to learn', true],
        ['Opening every shocking post immediately', false],
        ['Scrolling until you feel tired', false]
      ]
    }
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
    sections: [
      {
        title: 'Misinformation vs Disinformation',
        body: 'Misinformation is false information shared unknowingly. Disinformation is false information created to deceive, manipulate, or harm.',
        points: ['A fake remedy shared by a helpful friend is misinformation.', 'A fake news screenshot designed to trigger panic is disinformation.', 'Both can hurt real people.']
      },
      {
        title: 'Use SIFT',
        body: 'Pause when a post creates fear, anger, or excitement. Then check source credibility, find better coverage, and trace the claim back to its original context.',
        points: ['Read past the headline.', 'Check dates and locations.', 'Watch for fake URLs and edited screenshots.']
      }
    ],
    check: {
      question: 'What should you do first when a post makes you angry or scared?',
      options: [
        ['Stop before sharing', true],
        ['Forward it with a question mark', false],
        ['Argue in comments immediately', false]
      ]
    }
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
    sections: [
      {
        title: 'Scams Use Emotion',
        body: 'Scammers push urgency, panic, free rewards, and fake authority. The Free Fire diamond example shows how a fake login page can steal an account.',
        points: ['Do not enter passwords after clicking reward links.', 'Never share OTP codes.', 'Call a friend directly before sending money.']
      },
      {
        title: 'Look Closely at Links',
        body: 'Fake links often use misspellings, number substitutions, suspicious subdomains, or copied designs. A site can look real and still be dangerous.',
        points: ['Check the real domain, not only the page design.', 'Avoid unsafe APKs and game mods.', 'Use 2FA on important accounts.']
      }
    ],
    check: {
      question: 'A friend messages “Claim 5,000 diamonds free” and asks you to log in. Best response?',
      options: [
        ['Do not log in; verify with the friend directly', true],
        ['Enter your password quickly before offer ends', false],
        ['Share the link with classmates', false]
      ]
    }
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
    sections: [
      {
        title: 'AI Predicts, It Does Not Know',
        body: 'AI can summarize, translate, recognize patterns, and generate drafts. It can also hallucinate facts, invent sources, mirror bias, and sound confident when wrong.',
        points: ['Verify important facts outside AI.', 'Use AI for drafts, not final judgment.', 'Watch for deepfakes and manipulated media.']
      },
      {
        title: 'Critical Thinking Is the Core Skill',
        body: 'Critical thinking means asking questions, checking evidence, and thinking before reacting. Daily habits like the First 10 Rule protect attention and judgment.',
        points: ['No phone for the first 10 minutes after waking.', 'Question quick answers and trends.', 'Keep real-life offline activities in your week.']
      }
    ],
    check: {
      question: 'What is safest when AI gives an important fact?',
      options: [
        ['Verify it with trusted sources', true],
        ['Trust it because it sounds confident', false],
        ['Share it before checking', false]
      ]
    }
  }
};

const missions = {
  spotLie: {
    storageKey: 'onnoy_mission_spot_lie',
    title: 'Mission 1: Spot the Lie',
    subtitle: 'Identify misinformation before it spreads.',
    prevHref: 'level-2-missions.html',
    nextHref: 'mission-scam-alert.html',
    type: 'quiz',
    scenario: 'A post says: “Nagad is shutting down tomorrow. Withdraw all money now. Share urgently.” It includes a screenshot but no source link.',
    question: 'What is the safest judgment?',
    options: [
      ['Likely suspicious. Check trusted news and official sources before sharing.', true],
      ['Definitely true because it sounds urgent.', false],
      ['Share now and verify later.', false]
    ]
  },
  scamAlert: {
    storageKey: 'onnoy_mission_scam_alert',
    title: 'Mission 2: Scam Alert',
    subtitle: 'Identify and submit a scam for evaluation.',
    prevHref: 'mission-spot-the-lie.html',
    nextHref: 'mission-ai-integrity.html',
    type: 'form',
    formAction: 'https://formspree.io/f/xwvyyoqr',
    intro: 'Submit a suspicious link, post, message, or scam pattern. Onnoy reviews submissions manually.',
    fields: [
      ['name', 'Your Name', 'text', false],
      ['email', 'Your Email', 'email', true],
      ['source', 'Where did you see it?', 'text', true],
      ['link', 'Link or screenshot description', 'text', false],
      ['content', 'Describe the scam', 'textarea', true]
    ]
  },
  aiIntegrity: {
    storageKey: 'onnoy_mission_ai_integrity',
    title: 'Mission 3: AI Integrity Check',
    subtitle: 'Check whether an AI answer is reliable enough to use.',
    prevHref: 'mission-scam-alert.html',
    nextHref: 'mission-digital-guardian.html',
    type: 'quiz',
    scenario: 'An AI tool gives a quote, a statistic, and a website link for your assignment. The link does not open.',
    question: 'What should you do?',
    options: [
      ['Treat it as unverified and find trustworthy sources yourself.', true],
      ['Use it because AI usually knows.', false],
      ['Remove the broken link but keep the quote.', false]
    ]
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
      <div class="module-kicker">${lesson.eyebrow}</div>
      <h2>${lesson.title}</h2>
      <p class="module-lead">${lesson.subtitle}</p>
      <div class="module-status-pill">${status}</div>
    </section>
  `;

  lesson.sections.forEach((section) => {
    const block = document.createElement('section');
    block.className = 'module-content-card';
    block.innerHTML = `
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

  const check = document.createElement('section');
  check.className = 'module-check';
  check.innerHTML = `<h3>Quick Check</h3><p>${lesson.check.question}</p><div class="module-options"></div><p class="module-feedback" aria-live="polite"></p>`;
  const options = check.querySelector('.module-options');
  const feedback = check.querySelector('.module-feedback');
  lesson.check.options.forEach(([text, correct]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = text;
    button.addEventListener('click', () => {
      if (!correct) {
        feedback.textContent = 'Try again. Pause and choose the safest digital habit.';
        feedback.className = 'module-feedback danger';
        return;
      }
      setComplete(lesson.storageKey);
      feedback.textContent = 'Completed. Progress saved in this browser.';
      feedback.className = 'module-feedback success';
      check.querySelectorAll('button').forEach((btn) => (btn.disabled = true));
    });
    options.appendChild(button);
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
      <div class="module-status-pill">${isComplete(mission.storageKey) ? 'Complete' : 'Manual review may still be required'}</div>
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
  section.innerHTML = `<h3>Submit for Review</h3><p>${mission.intro || 'Send this to Onnoy for manual review.'}</p>`;
  const form = document.createElement('form');
  form.action = mission.formAction;
  form.method = 'POST';
  form.innerHTML = `<input type="hidden" name="_subject" value="${mission.title}">`;
  mission.fields.forEach(([name, label, type, required]) => {
    const group = document.createElement('div');
    group.className = 'form-group';
    if (type === 'textarea') {
      group.innerHTML = `<label class="form-label" for="${name}">${label}${required ? ' *' : ''}</label><textarea class="form-control" id="${name}" name="${name}" rows="5" ${required ? 'required' : ''}></textarea>`;
    } else {
      group.innerHTML = `<label class="form-label" for="${name}">${label}${required ? ' *' : ''}</label><input class="form-control" id="${name}" name="${name}" type="${type}" ${required ? 'required' : ''}>`;
    }
    form.appendChild(group);
  });
  const buttonText = referralMode ? 'Submit Recognition Claim' : 'Submit Scam for Evaluation';
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
