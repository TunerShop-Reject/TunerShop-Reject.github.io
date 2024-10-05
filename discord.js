// Send data to Discord webhook
function sendToDiscord(data) {
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1282550384031694860/3VCV9lVMtbhtrYrNpaGPAiWECjZET333tzvWA9P1UVdiEbo8q2yzfnH9vmJLB_tf9iIY'; // Replace with your actual webhook URL
    
    const payload = {
        embeds: [{
            title: "New Sale Submission",
            description: `A new sale has been recorded with the following details:`,
            color: 0x0099ff, // Blue color
            fields: [
                { name: "Name", value: data.name, inline: true },
                { name: "State ID", value: data.stateId, inline: true },
                { name: "Sale Amount", value: `$${data.saleAmount}`, inline: true },
                { name: "Position", value: data.position, inline: true },
                { name: "Commission Rate", value: `${data.commissionRate}`, inline: true },
                { name: "Commission", value: `$${data.commission}`, inline: true },
                { name: "Timestamp", value: data.timestamp, inline: true }
            ],
            footer: {
                text: "Sent from Ice Planet",
            },
            timestamp: new Date().toISOString()
        }]
    };

    fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Handle form submission
document.getElementById('saleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const data = {
        name: document.getElementById('name').value,
        stateId: document.getElementById('stateId').value,
        saleAmount: document.getElementById('saleAmount').value,
        position: document.getElementById('position').value,
        commissionRate: document.getElementById('commissionRate').value,
        commission: document.getElementById('commission').value,
        timestamp: document.getElementById('timestamp').value,
    };
    
    sendToDiscord(data); // Call function to send data to Discord
});
