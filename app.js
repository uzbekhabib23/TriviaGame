
$(document).ready(function() {

    var scoreCorrect = 0;
    
    
    
        $('.question').fadeOut('fast');
    
        $('.result').fadeOut('fast');
    
    
    
        $('#play').click(function() {
    
            $(this).fadeOut('fast');
    
            $('#questionOne').fadeIn('slow');
    
        });
    
    
    
        $('#submitOne').click(function() {
    
            var inputOne = $('#answerOne').val();
    
            console.log(inputOne);
    
            if (inputOne.toLowerCase() === "adams") {
    
                $('#questionOne').fadeOut('fast'),
    
                $('#correct').fadeIn('fast'),
    
                $('#questionTwo').fadeIn('slow'),
    
                scoreCorrect += 1,
    
                console.log(scoreCorrect);
    
            } else {
    
                $('#questionOne').fadeOut('fast'),
    
                $('#sorry').fadeIn('slow'),
    
                $('#questionTwo').fadeIn('slow');
    
                };
    
        });
    
    
    
        $('#submitTwo').click(function() {
    
            var inputTwo = $('#answerTwo').val();
    
            console.log(inputTwo);
    
            if (inputTwo.toLowerCase() === "columbia") {
    
                $('#questionTwo').fadeOut('fast'),
    
                $('#sorry').fadeOut('fast'),
    
                $('#correct').fadeIn('slow'),
    
                $('#questionThree').fadeIn('slow'),
    
                scoreCorrect += 1,
    
                console.log(scoreCorrect);
    
            } else {
    
                $('#questionTwo').fadeOut('fast'),
    
                $('#correct').fadeOut('fast'),
    
                $('#sorry').fadeIn('slow'),
    
                $('#questionThree').fadeIn('slow');
    
                };
    
        });
    
    
    
        $('#submitThree').click(function() {
    
            var inputThree = $('#answerThree').val();
    
            console.log(inputThree);
    
            if ( (inputThree.toLowerCase() === "42") || (inputThree.toLowerCase() === "42nd")) {
    
                $('#questionThree').fadeOut('fast'),
    
                $('#correct').fadeOut('fast'),
    
                $('#sorry').fadeOut('fast'),
    
                $('#score').fadeIn('slow'),
    
                $('#correctTwo').fadeIn('slow'),
    
                scoreCorrect += 1,
    
                console.log(scoreCorrect),
    
                $('#score').append("<p>You answered " + scoreCorrect +" question correctly out of 3.</p>");
    
            } else {
    
                $('#questionThree').fadeOut('fast'),
    
                $('#correct').fadeOut('fast'),
    
                $('#sorry').fadeOut('fast'),
    
                $('#sorryTwo').fadeIn('slow'),
    
                $('#score').fadeIn('slow'),
    
                $('#score').append("<p>You answered " + scoreCorrect +" question correctly out of 3.</p>");
    
                };
    
        });
    
    
    
    });