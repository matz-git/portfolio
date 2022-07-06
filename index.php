<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stefan Steil - Portfolio</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./css/style.css">
    <script src="script.js"></script>
</head>
<body>
   
    <div id="loader" class="loader">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
    </div>

    <div id="content">
        <header>
            <h1>PORTFOLIO</h1>
        </header>

        <div id="grid">
            <?php
                $strJsonFileContents = file_get_contents("data.json");
                $json = json_decode($strJsonFileContents);

                foreach($json as $data) 
                {
                    echo "
                        <figure class='snip1084' style='background:$data->color'>
                            <picture>
                                <source srcset='./images/$data->image.jpg' type='image/webp'>
                                <source srcset='./images/$data->image.jpg' type='image/jpeg'>
                                <img src='./images/$data->image.jpg'>
                            </picture>
                            <figcaption>";
                            
                                if($data->name_swapped == "false")
                                    echo "<h2><span>$data->name</span> $data->name_addition</h2>";
                                else
                                    echo "<h2>$data->name <span>$data->name_addition</span></h2>";
                    
                    echo "
                                <p>$data->text</p>
                            </figcaption>
                    
                            <span class='links'>
                                <a class='link' target='_blank' href='$data->code'>
                                    <object data='./icons/github.svg' width='20' height='20'> </object>
                                    code
                                </a>";

                            if($data->web != "") echo "
                                <a class='link' target='_blank' href='$data->web'>
                                    <object data='./icons/www.svg' width='20' height='20'> </object>
                                    website
                                </a>";
                    echo "
                            </span>
                        </figure>
                    ";
                }
            ?>
        </div><!-- grid -->

        <footer>
            2022 | Stefan Steil | <a href="https://github.com/matz-git/portfolio" taget="_blank">code (GitHub)</a>
        </footer>
    </div><!-- content -->
</body>
</html>