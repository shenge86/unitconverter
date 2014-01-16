// randomquote.js
// generates random quotes

function displayQuote() {
	var quoteArr = new Array();
	quoteArr[0] = "Enjoy the drug of imagination. <br/> - Shen Ge";
	quoteArr[1] = "Do what is right, not what you're told.";
	quoteArr[2] = "You have a small penis and you're 4000 kilometers away. You will never reach there. <br/> Diana Mutascu to Shen Ge";
	quoteArr[3] = "Inspiration can get you started but only habit gets you going.";
	quoteArr[4] = "Add negative observations padded with positive ones to influence people. <br/> - Nishanth Sasankan";
	quoteArr[5] = "Teaching is not just about teaching what the students to know, it's also about understanding what the students do not know. <br/> - Nishanth Sasankan";
	quoteArr[6] = "In life, you can learn from the mistakes of others as well as the successes of others. It is never necessary to follow others when clearly they're not doing something right. <br/> - Nishanth Sasankan";
	quoteArr[7] = "If I can see 1% of the things in life differently from other people, I gain a deeper understanding of life and attain overall enlightenment on the other 99%. <br/> - Nishanth Sasankan";
	quoteArr[8] = "Many times people are not looking for a direct answer or solution to a problem; they're looking for an emotional appeal and attachment. <br/> - Nishanth Sasankan";
	quoteArr[9] = "A relationship is like an education but you're paying with emotion instead of money. Sometimes you can just get flat broke. <br/> - Nishanth Sasankan";
	quoteArr[10] = "To reach a difficult dream is like climbing a steep mountain, I will inevitably stumble and fall. The key is to cling on and make sure that I never fall off the mountain entirely--to keep climbing upwards despite how many times I fall backwards. <br/> - Nishanth Sasankan";
	quoteArr[11] = "Sometimes there's a decision and sometimes there's an impulse to do something. To make the decision is to direct the flow while to follow impulse is to the flow take you. <br/> - Nishanth Sasankan";
	quoteArr[12] = "No one shows a child the sky. <br/> - African proverb";
	quoteArr[13] = "Pursuing an extraordinary world tomorrow creates a better world today. <br/> - Dr. Mae Jemison";
	quoteArr[14] = "There’s a microscopic fine difference between genius and the biggest idiot on the planet. <br/> - Dr. Mae Jemison";
	quoteArr[15] = "I want to do it because I want to do it. <br/> - Amelia Earhart";
	quoteArr[16] = "One can never consent to creep when one feels the impulse to soar. <br/> - Helen Keller";
	quoteArr[17] = "When the chemist has prepared the sheet, the artist directs the lens. <br/> - Charles Nègre";
	quoteArr[18] = "Those who do not know the path cannot know they have strayed from the path. We must first teach what is right before expecting change. <br/> - Shen";
	quoteArr[19] = "Harder problems make you think of more creative solutions. <br/>- Shen";
	quoteArr[20] = "Though you may feel lost or unhappy at the moment, never lose your sight of the mountain in the distance that you're headed towards. <br/>- Shen";
	quoteArr[21] = "For love, make your absence enough for someone to miss you, but not enough that someone learns to live without you. <br/>- Shen";
	quoteArr[22] = "Tell a beautiful elder lady that she has aged gracefully when you get the chance. There are not many older people who still retain their youthful beauty. <br/>- Shen";
	quoteArr[23] = "What you do immediately before you sleep and immediately after you wake up has a profound effect on your dream and waking world respectively. <br/>- Shen";
	quoteArr[24] = "The power of encouragement can be amazing. Either that or you're easily influenced. <br/>- Shen";
	quoteArr[25] = "Freedom can often be more lovely than love but only with love can there be freedom. <br/>- Shen";
	quoteArr[26] = "I have more questions than answers. That's how it should be. <br/>- Shen";
	quoteArr[27] = "A man can fail many times but he isn't a failure until he gives up.";
	quoteArr[28] = "Thinking too little leads to bad action. Thinking too much leads to no action. <br/>- Shen";
	quoteArr[29] = "There are some problems in life that cannot be resolved. You just have to let time heal it. <br/>  -Nishanth";
	quoteArr[30] = "To perceive people for who they are and how to influence them is a powerful ability. <br/>- Nishanth";
	quoteArr[31] = "Willpower gets you started but only habit gets you going.";
	quoteArr[32] = "A doer without knowledge is a fool. A learner without action is an intellectual."
	
	quotelength = quoteArr.length-1;
	
	var quoteval;
	quoteval = Math.round(quotelength * Math.random());
	quote = quoteArr[quoteval];
	return quote;
}
