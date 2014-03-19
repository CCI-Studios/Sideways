<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */

if ($title == "Single Promo")
	$title = "Promo";
if ($title == "Weekly Feature")
	$title = "Weekly";
?>
<div class="grouping grouping-<?php print drupal_html_class($title);?>"><div><div>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php
$i = 0;
foreach ($rows as $id => $row):
  $classes_array[$id] .= ' mod3-'.($i%3);
  $i++;
?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>><div>
    <?php print $row; ?>
  </div></div>
<?php endforeach; ?>
</div></div></div>
