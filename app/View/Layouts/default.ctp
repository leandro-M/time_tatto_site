<!DOCTYPE html>
<html>
	<head>
		<?php echo $this->Html->charset(); ?>
		<title>Time Tattoo - Default</title>
		<?php
			echo $this->Html->meta('icon');
            
            //css
			echo $this->Html->css('main');

			echo $this->fetch('meta');
			echo $this->fetch('css');
			echo $this->fetch('script');
		?>
	</head>
	<body>
		<header></header>

        <main>
            <?php echo $this->Flash->render(); ?>
		    <?php echo $this->fetch('content'); ?>
        </main>

        <footer></footer>
	</body>

    <?php
        //js default
		echo $this->Html->script('libs/libs');
        echo $this->fetch('scripts');
    ?>
</html>