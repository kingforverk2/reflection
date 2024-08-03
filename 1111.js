async function submitReflection() {
    const reflectionText = document.getElementById('reflection-input').value;
    const questionBox = document.getElementById('question-box');

    // Example of calling the OpenAI API
    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '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'
        },
        body: JSON.stringify({
            prompt: reflectionText + "\n\n###\n\nFollow-up question:",
            max_tokens: 50
        })
    });

    const data = await response.json();
    questionBox.textContent = data.choices[0].text.trim();

    // Clear the textarea
    document.getElementById('reflection-input').value = '';
}

// Remember to handle errors in real applications
