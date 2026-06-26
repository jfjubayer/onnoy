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
