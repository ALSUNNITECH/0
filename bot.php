<?php
// config.php
define('BOT_TOKEN', '2038195983:AAERggKgyiM3zaND0rHo-2TLihk5WkNWUms'); // ضع رمز التوكن الخاص بك هنا
define('API_URL', 'https://api.telegram.org/bot' . BOT_TOKEN . '/');

// Function to send message
function sendMessage($chat_id, $text) {
    $url = API_URL . 'sendMessage?chat_id=' . $chat_id . '&text=' . urlencode($text);
    file_get_contents($url);
}

// Get the updates from Telegram
$update = file_get_contents('php://input');
$update = json_decode($update, TRUE);

if (isset($update['message'])) {
    $chat_id = $update['message']['chat']['id'];
    $message_text = $update['message']['text'];

    // Here you can add more logic to respond differently based on the message text
    $response_text = "You said: " . $message_text;
    sendMessage($chat_id, $response_text);
}
?>
