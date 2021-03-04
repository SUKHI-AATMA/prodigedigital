<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <?php if (!is_front_page()) : ?>
        <header class="entry-header alignwide">
            <?php get_template_part('template-parts/header/entry-header'); ?>
            <?php twenty_twenty_one_post_thumbnail(); ?>
        </header>
    <?php elseif (has_post_thumbnail()) : ?>
        <header class="entry-header alignwide">
            <?php twenty_twenty_one_post_thumbnail(); ?>
        </header>
    <?php endif; ?>
    
    <?php if (is_active_sidebar('profile_sidebar')) : ?>
        <div class="main-mycontainer">
            <div class="mycontainer">

        <aside class="profile_sidebar">
        <?php dynamic_sidebar('profile_sidebar'); ?>
        </aside>
        <?php endif; ?>

    <div class="entry-content">
		 <?php  $current_user = wp_get_current_user();
      $fname = $current_user->user_firstname;
      $username = $current_user->user_login;
      $name = !empty($fname) ? $fname : $username;
      ?>
     <h2>Hey  <?php echo $name; ?>, Here`s your</h2>
<?php
the_content();

wp_link_pages(
        array(
            'before' => '<nav class="page-links" aria-label="' . esc_attr__('Page', 'twentytwentyone') . '">',
            'after' => '</nav>',
            /* translators: %: page number. */
            'pagelink' => esc_html__('Page %', 'twentytwentyone'),
        )
);
?>
    </div> <!-- .entry-content -->
    </div>
</div>


<?php if (get_edit_post_link()) : ?>
        <footer class="entry-footer default-max-width">
        <?php
        edit_post_link(
                sprintf(
                        /* translators: %s: Name of current post. Only visible to screen readers. */
                        esc_html__('Edit %s', 'twentytwentyone'),
                        '<span class="screen-reader-text">' . get_the_title() . '</span>'
                ),
                '<span class="edit-link">',
                '</span>'
        );
        ?>
        </footer><!-- .entry-footer -->
        <?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
