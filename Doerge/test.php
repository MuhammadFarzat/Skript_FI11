<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<?php
		//phpinfo();
		echo "PHP ist einfach<br>";
		echo "zweites Echo";

		?>
		<div>HTML</div>
		<?php
		$preis = 5 * 2;
		$type = gettype($preis);
		echo "<h1 id = 'ueberschrift1'> Die Variable preis hat den Wert $preis und den Typ $type</h1>";
		?>	
		<?php 
		  echo "<form>
			<label for='vname'>Vorname:
			  <input type='text' id='vname' name='vname'>
			</label>
			<label for='zname'>Zuname: 
			  <input id='zname' name='zname'>
			</label>
		  </form>";
		?>

		<?php
		$name = "Selena Gomez";
		$alter = 26;
		$alles = $name." ist ".$alter." Jahre alt.";

		echo "$name ist $alter Jahre alt.<br>";
		echo "$alles<br>";
		for($i = 0; $i <= 20; $i++)
		{
			if($i <= 10)
			{
				echo "Ich bin $i Jahre jung.<br>";
			}
			else
			{
				echo "Ich bin $i Jahre alt.<br>";
			}
			
		}

	//	$sammlung = array("Hose","Jacke", 1, 2, 3.3); 
	//	$laenge = count(array); 
		?>
	</body>
</html>
