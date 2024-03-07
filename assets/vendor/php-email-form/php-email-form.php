<?php

class PHP_Email_Form
{
    public $to;
    public $from_name;
    public $from_email;
    public $subject;
    public $smtp;
    public $ajax;
    public $attachments;

    protected $error_message;

    function __construct()
    {
        $this->ajax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }

    public function add_message($content, $name = null)
    {
        if ($name !== null) {
            $this->message .= "<p>{$content}</p>";
        } else {
            $this->message .= "<p>{$content}</p>";
        }
    }

    public function send()
    {
        $this->validate();

        if ($this->error_message) {
            return $this->error_message;
        }

        $headers = "From: {$this->from_name} <{$this->from_email}>\r\n";
        $headers .= "Reply-To: {$this->from_email}\r\n";
        $headers .= "Content-type: text/html\r\n";

        // Add multiple receiving email addresses
        $to_array = explode(',', $this->to);

        foreach ($to_array as $to_email) {
            $sent = mail(trim($to_email), $this->subject, $this->message, $headers);

            if (!$sent) {
                return 'Error sending email.';
            }
        }

        return 'Email successfully sent.';
    }

    protected function validate()
    {
        if (empty($this->to) || empty($this->from_name) || empty($this->from_email) || empty($this->subject)) {
            $this->error_message = 'Missing required fields.';
        } elseif (!filter_var($this->from_email, FILTER_VALIDATE_EMAIL)) {
            $this->error_message = 'Invalid email address.';
        }
    }
}

// Instantiate PHP_Email_Form class
$contact = new PHP_Email_Form;

// Define receiving email addresses
$receiving_email_addresses = 'vrushali.geek@gmail.com, anotheremail@example.com';
$contact->to = $receiving_email_addresses;

// Assign form data to PHP_Email_Form properties
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];
$contact->add_message($_POST['name'], 'From');
$contact->add_message($_POST['email'], 'Email');
$contact->add_message($_POST['message'], 'Message', 10);

// Send email
echo $contact->send();
?>
