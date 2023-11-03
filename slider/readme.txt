1. Um den Slick Slider richtig verwenden zu können musst du im BE beim bearbeiten der Seite einen Container erstellen in dem du alle Inhalte reinpflegst, 
die im Slider gewünscht sind. diesen Container musst du die CSS-Klasse "econsor-slider" geben. Bsp.

	CONTAINER (econsor-slider)
		Inhalt 1 
		Inhalt 2
		Inhalt 3

Info: man kann den Slider bei Bedarf erweitern für vereinzelte Animationen oder ähnliches, in dem man den einzelnen Elementen ebenfalls Klassen vergibt.

2. Nun sollte der Slider funktionieren.

(2.1). Wenn der Slider nicht funktionieren sollte, Prüfe ob in der functions.php folgender Code drinnen ist / der Pfad stimmt: 

    wp_enqueue_script('jquery', get_stylesheet_directory_uri() .'/slider/jquery.min.js', array(), null, true);
    wp_enqueue_style('slick-style', get_stylesheet_directory_uri() . '/slider/slick.css');
    wp_enqueue_script('slick-script', get_stylesheet_directory_uri() . '/slider/slick.min.js', array('jquery'), null, true);
    wp_enqueue_script('custom.js', get_stylesheet_directory_uri() . '/slider/custom.js', array('jquery', 'slick-script'), null, true);

Der Slider hat einige Custom Styles die in der "slick.css" angepasst sind, u.a. die Farbe, Größe der Punkte, etc. Diese bei Bedarf anpassen.

3. In der custom.js kann man den Slider nach belieben erweitern oder verändern.




