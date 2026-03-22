/*Based on Mythic GME 2e*/

/*Check if Expected Scene Happens*/
function expectedSceneCheck(chaosNumber, meaningVal) {
    let roll = Math.floor(Math.random()*10) + 1;
    let formatAlter = "Altered Scene: " + alterAdjustments();
    let formatInterrupt = "Interrupt Scene: " + eventFocus() + ", " + eventMeaning(meaningVal);
    let result = roll > chaosNumber ? "Expected Scene":(roll<=chaosNumber && roll%2!==0) ? formatAlter:(roll<=chaosNumber && roll%2==0) ? formatInterrupt:"Error";
    return result;
}

/*Altered Scene*/
function alterAdjustments() {
    const adjustmentTable = ["Remove A Character", "Add A Character", "Reduce/Remove An Activity", "Increase An Activity", "Remove An Object", "Add An Object"];
    let roll = Math.floor(Math.random()*10);
    switch (roll<5) {
        case true:
            return adjustmentTable[roll];
            break;
        default:
            return adjustmentTable[Math.floor(Math.random()*6)] + " " + adjustmentTable[Math.floor(Math.random()*6)];
    }
}

/*Random Event*/
function randomEventGen(meaning) {
    let format = eventFocus() + ", " + eventMeaning(meaning);
    return format;
}


/*Event Focus*/
function eventFocus() {
    const eventFocusTable = ["Remote Event", "Ambiguous Event", "New NPC", "New NPC", "NPC Action", "NPC Action", "NPC Action", "NPC Action", "NPC Negative", "NPC Positive", "Move Toward A Thread", "Move Away From A Thread", "Move Away From A Thread", "Close A Thread", "PC Negative", "PC Negative", "PC Positive", "Current Context", "Current Context", "Current Context"];
    let roll1 = Math.floor(Math.random()*20);
    return eventFocusTable[+roll1];
}

/*Fate Questions*/
function FateCheck(ChaosFactor,Odds,focusRoll) {
    const answers = ["Exceptional No", "Exceptional No", "Exceptional No", "No", "No", "No", "No", "No", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Exceptional Yes", "Exceptional Yes", "Exceptional Yes"];
    const ModLookup = [-5, -4, -2, -1, 0, +1, +2, +4, +5];
    let roll1 = Math.floor(Math.random()*10);
    let roll2 = Math.floor(Math.random()*10);
    let rollTotal = +roll1 + +roll2;
    let moddedRoll = +rollTotal + +ModLookup[+ChaosFactor] + +ModLookup[+Odds];
    let finalRoll = (+moddedRoll>=18) ? 18:(+moddedRoll<=0) ? 0:+moddedRoll;
    let randomEvent = ((+roll1 == +roll2) ||  (finalRoll<(8 && (+ChaosFactor -1)))) ? "; Random Event: " + eventFocus() + ", " + eventMeaning(focusRoll):"";
    return answers[+finalRoll] + randomEvent;
}

/*Event Meanings*/

/*select between tables*/
function eventMeaning(focus) {
    const action1 = ["Abandon", "Accompany", "Activate", "Agree", "Ambush", "Arrive", "Assist", "Attack", "Attain", "Bargain", "Befriend", "Bestow", "Betray", "Block", "Break", "Carry", "Celebrate", "Change", "Close", "Combine", "Communicate", "Conceal", "Continue", "Control", "Create", "Deceive", "Decrease", "Defend", "Delay", "Deny", "Depart", "Deposit", "Destroy", "Dispute", "Disrupt", "Distrust", "Divide", "Drop", "Easy", "Energize", "Escape", "Expose", "Fail", "Fight", "Flee", "Free", "Guide", "Harm", "Heal", "Hinder", "Imitate", "Imprison", "Increase", "Indulge", "Inform", "Inquire", "Inspect", "Invade", "Leave", "Lure", "Misuse", "Move", "Neglect", "Observe", "Open", "Oppose", "Overthrow", "Praise", "Proceed", "Protect", "Punish", "Pursue", "Recruit", "Refuse", "Release", "Relinquish", "Repair", "Repulse", "Return", "Reward", "Ruin", "Separate", "Start", "Stop", "Strange", "Struggle", "Succeed", "Support", "Suppress", "Take", "Threaten", "Transform", "Trap", "Travel", "Triumph", "Truce", "Trust", "Use", "Usurp", "Waste"];
    const action2 = ["Advantage", "Adversity", "Agreement", "Animal", "Attention", "Balance", "Battle", "Benefits", "Building", "Burden", "Bureaucracy", "Business", "Chaos", "Comfort", "Completion", "Conflict", "Cooperation", "Danger", "Defense", "Depletion", "Disadvantage", "Distraction", "Elements", "Emotion", "Enemy", "Energy", "Environment", "Expectation", "Exterior", "Extravagance", "Failure", "Fame", "Fear", "Freedom", "Friend", "Goal", "Group", "Health", "Hindrance", "Home", "Hope", "Idea", "Illness", "Illusion", "Individual", "Information", "Innocent", "Intellect", "Interior", "Investment", "Leadership", "Legal", "Location", "Military", "Misfortune", "Mundane", "Nature", "Needs", "News", "Normal", "Object", "Obscurity", "Official", "Opposition", "Outside", "Pain", "Path", "Peace", "People", "Personal", "Physical", "Plot", "Portal", "Possessions", "Poverty", "Power", "Prison", "Project", "Protection", "Reassurance", "Representative", "Riches", "Safety", "Strength", "Success", "Suffering", "Surprise", "Tactic", "Technology", "Tension", "Time", "Trial", "Value", "Vehicle", "Victory", "Vulnerability", "Weapon", "Weather", "Work", "Wound"];
    const descriptor1 = ["Adventurously", "Aggressively", "Anxiously", "Awkwardly", "Beautifully", "Bleakly", "Boldly", "Bravely", "Busily", "Calmly", "Carefully", "Carelessly", "Cautiously", "Ceaselessly", "Cheerfully", "Combatively", "Coolly", "Crazily", "Curiously", "Dangerously", "Defiantly", "Deliberately", "Delicately", "Delightfully", "Dimly", "Efficiently", "Emotionally", "Energetically", "Enormously", "Enthusiastically", "Excitedly", "Fearfully", "Ferociously", "Fiercely", "Foolishly", "Fortunately", "Frantically", "Freely", "Frighteningly", "Fully", "Generously", "Gently", "Gladly", "Gracefully", "Gratefully", "Happily", "Hastily", "Healthily", "Helpfully", "Helplessly", "Hopelessly", "Innocently", "Intensely", "Interestingly", "Irritatingly", "Joyfully", "Kindly", "Lazily", "Lightly", "Loosely", "Loudly", "Lovingly", "Loyally", "Majestically", "Meaningfully", "Mechanically", "Mildly", "Miserably", "Mockingly", "Mysteriously", "Naturally", "Neatly", "Nicely", "Oddly", "Offensively", "Officially", "Partially", "Passively", "Peacefully", "Perfectly", "Playfully", "Politely", "Positively", "Powerfully", "Quaintly", "Quarrelsomely", "Quietly", "Roughly", "Rudely", "Ruthlessly", "Slowly", "Softly", "Strangely", "Swiftly", "Threateningly", "Timidly", "Very", "Violently", "Wildly", "Yieldingly"];
    const descriptor2 = ["Abnormal", "Amusing", "Artificial", "Average", "Beautiful", "Bizarre", "Boring", "Bright", "Broken", "Clean", "Cold", "Colorful", "Colorless", "Comforting", "Creepy", "Cute", "Damaged", "Dark", "Defeated", "Dirty", "Disagreeable", "Dry", "Dull", "Empty", "Enormous", "Extraordinary", "Extravagant", "Faded", "Familiar", "Fancy", "Feeble", "Festive", "Flawless", "Forlorn", "Fragile", "Fragrant", "Fresh", "Full", "Glorious", "Graceful", "Hard", "Harsh", "Healthy", "Heavy", "Historical", "Horrible", "Important", "Interesting", "Juvenile", "Lacking", "Large", "Lavish", "Lean", "Less", "Lethal", "Lively", "Lonely", "Lovely", "Magnificent", "Mature", "Messy", "Mighty", "Military", "Modern", "Mundane", "Mysterious", "Natural", "Normal", "Odd", "Old", "Pale", "Peaceful", "Petite", "Plain", "Poor", "Powerful", "Protective", "Quaint", "Rare", "Reassuring", "Remarkable", "Rotten", "Rough", "Ruined", "Rustic", "Scary", "Shocking", "Simple", "Small", "Smooth", "Soft", "Strong", "Stylish", "Unpleasant", "Valuable", "Vibrant", "Warm", "Watery", "Weak", "Young"];
    const locations = ["Abandoned", "Active", "Artistic", "Atmosphere", "Beautiful", "Bleak", "Bright", "Business", "Calm", "Charming", "Clean", "Cluttered", "Cold", "Colorful", "Colorless", "Confusing", "Cramped", "Creepy", "Crude", "Cute", "Damaged", "Dangerous", "Dark", "Delightful", "Dirty", "Domestic", "Empty", "Enclosed", "Enormous", "Entrance", "Exclusive", "Exposed", "Extravagant", "Familiar", "Fancy", "Festive", "Foreboding", "Fortunate", "Fragrant", "Frantic", "Frightening", "Full", "Harmful", "Helpful", "Horrible", "Important", "Impressive", "Inactive", "Intense", "Intriguing", "Lively", "Lonely", "Long", "Loud", "Meaningful", "Messy", "Mobile", "Modern", "Mundane", "Mysterious", "Natural", "New", "Occupied", "Odd", "Official", "Old", "Open", "Peaceful", "Personal", "Plain", "Portal", "Protected", "Protection", "Purposeful", "Quiet", "Reassuring", "Remote", "Resourceful", "Ruined", "Rustic", "Safe", "Services", "Simple", "Small", "Spacious", "Storage", "Strange", "Stylish", "Suspicious", "Tall", "Threatening", "Tranquil", "Unexpected", "Unpleasant", "Unusual", "Useful", "Warm", "Warning", "Watery", "Welcoming"];
    const characters = ["Accompanied", "Active", "Aggressive", "Ambush", "Animal", "Anxious", "Armed", "Beautiful", "Bold", "Busy", "Calm", "Careless", "Casual", "Cautious", "Classy", "Colorful", "Combative", "Crazy", "Creepy", "Curious", "Dangerous", "Deceitful", "Defeated", "Defiant", "Delightful", "Emotional", "Energetic", "Equipped", "Excited", "Expected", "Familiar", "Fast", "Feeble", "Feminine", "Ferocious", "Foe", "Foolish", "Fortunate", "Fragrant", "Frantic", "Friend", "Frightened", "Frightening", "Generous", "Glad", "Happy", "Harmful", "Helpful", "Helpless", "Hurt", "Important", "Inactive", "Influential", "Innocent", "Intense", "Knowledgeable", "Large", "Lonely", "Loud", "Loyal", "Masculine", "Mighty", "Miserable", "Multiple", "Mundane", "Mysterious", "Natural", "Odd", "Official", "Old", "Passive", "Peaceful", "Playful", "Powerful", "Professional", "Protected", "Protecting", "Questioning", "Quiet", "Reassuring", "Resourceful", "Seeking", "Skilled", "Slow", "Small", "Stealthy", "Strange", "Strong", "Tall", "Thieving", "Threatening", "Triumphant", "Unexpected", "Unnatural", "Unusual", "Violent", "Vocal", "Weak", "Wild", "Young"];
    const objects = ["Active", "Artistic", "Average", "Beautiful", "Bizarre", "Bright", "Clothing", "Clue", "Cold", "Colorful", "Communication", "Complicated", "Confusing", "Consumable", "Container", "Creepy", "Crude", "Cute", "Damaged", "Dangerous", "Deactivated", "Deliberate", "Delightful", "Desired", "Domestic", "Empty", "Energy", "Enormous", "Equipment", "Expected", "Expended", "Extravagant", "Faded", "Familiar", "Fancy", "Flora", "Fortunate", "Fragile", "Fragrant", "Frightening", "Garbage", "Guidance", "Hard", "Harmful", "Healing", "Heavy", "Helpful", "Horrible", "Important", "Inactive", "Information", "Intriguing", "Large", "Lethal", "Light", "Liquid", "Loud", "Majestic", "Meaningful", "Mechanical", "Modern", "Moving", "Multiple", "Mundane", "Mysterious", "Natural", "New", "Odd", "Official", "Old", "Ornamental", "Ornate", "Personal", "Powerful", "Prized", "Protection", "Rare", "Ready", "Reassuring", "Resource", "Ruined", "Small", "Soft", "Solitary", "Stolen", "Strange", "Stylish", "Threatening", "Tool", "Travel", "Unexpected", "Unpleasant", "Unusual", "Useful", "Useless", "Valuable", "Warm", "Weapon", "Wet", "Worn"];
    switch (focus) {
        case "0":
            return action1[Math.floor(Math.random()*100)] + " " + action2[Math.floor(Math.random()*100)];
            break;
        case "1":
            return descriptor1[Math.floor(Math.random()*100)] + " " + descriptor2[Math.floor(Math.random()*100)];
            break;
        case "2":
            return locations[Math.floor(Math.random()*100)] + " " + locations[Math.floor(Math.random()*100)];
            break;
        case "3":
            return characters[Math.floor(Math.random()*100)] + " " + characters[Math.floor(Math.random()*100)];
            break;
        case "4":
            return objects[Math.floor(Math.random()*100)] + " " + objects[Math.floor(Math.random()*100)];
            break;
        default:
            return "Invalid Event Meaning Selected."
    }
}

/*UI Adjustment*/
function chaosAdjust(number) {
    let chaosFactor = document.getElementById("chaosFactor").value;
    let result = +chaosFactor + +number;
    switch (true) {
        case result>=9:
            document.getElementById("chaosFactor").value = 9;
            break;
        case result<=1:
            document.getElementById("chaosFactor").value = 1;
            break;
        default:
            document.getElementById("chaosFactor").value = result;
    }
}