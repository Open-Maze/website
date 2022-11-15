<?php

function contact_submit()
{

    $message_data = fetch_message_data();

    if (check_message($message_data)) {

        $is_email_sent = send_email($message_data);
    } else {
        // kapot
    }
}

function check_message($message_data)
{
    try {
        // setup our errors array
        $errors = array();

        // form validation
        if (!strlen($message_data['name'])) $errors['name'] = 'Name is required.';
        if (!strlen($message_data['email'])) $errors['email'] = 'Email address is required.';
        if (strlen($message_data['email']) && !is_email($message_data['email'])) $errors['email'] = 'Email address must be valid.';

        // IF there are errors
        if (count($errors)) :

            return false;

        else :

            return true;

        endif;
    } catch (Exception $e) {

        return false;
    }
}

// fetches the message data and returns it
function fetch_message_data()
{
    // prepare message data
    $message_data = array(
        'name' => esc_attr($_POST['name']),
        'email' => esc_attr($_POST['email']),
        'phone' => esc_attr($_POST['phone']),
        'message' => esc_attr($_POST['message'])
    );

    return $message_data;
}

function send_email($message_data)
{
    header('Content-Type: application/json');
    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);
    require_once(plugin_dir_path(__FILE__) . '/assets/sendgrid-php/sendgrid-php.php');


    // fetch site information
    $site_title = get_bloginfo('name');
    $site_url = get_bloginfo('url');
    $site_url = preg_replace("#^[^:/.]*[:/]+#i", "", $site_url);
    $site_url = 'www.' . $site_url;

    // set from and to email
    $from_email = "";
    $to_email = "";


    $subject = "Nieuw contactverzoek op: " . $site_title;

    // last check if message has content before it gets sent
    if ($message_data['name'] && $message_data['email'] && $message_data['message']) {

        // set general content like the from and to email
        $the_email = new \SendGrid\Mail\Mail();
        $the_email->setFrom($from_email, $site_title);
        $the_email->setSubject($subject);
        $the_email->addTo($to_email, $site_title);


        // set the message content
        $the_email->addContent("text/html", "<h3>Nieuw contact verzoek: " . $site_title . "</h3><br /><br /><b>Name: </b>" . $message_data['name'] . "<br /><b>Email: </b>" . $message_data['email'] . "<br /><b>Phone: </b>" . $message_data['phone'] . "<br /><br /><b>Message: </b><br />" . $message_data['message']);

        $sendgrid = new \SendGrid('');

        try {
            $sendgrid->send($the_email);
            $sendgrid->send($confirmation_email);

            echo json_encode(array(
                'status' => 'success',
            ));

            return true;
        } catch (Exception $e) {
            echo 'Caught exception: ' . $e->getMessage() . "\n";
        }
    } else {

        echo json_encode(array(
            'status' => 'error',
        ));

        return false;
    }
}
