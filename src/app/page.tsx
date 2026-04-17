"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Car, Clock, DollarSign, MapPin, ShieldCheck, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Ishani Restaurant"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "sparkles-gradient"}}
      title="Welcome to Ishani Restaurant 🍽️"
      description="Ishani Restaurant is a popular food spot near Central Bus Stand, Contai, serving rolls, noodles, tandoori dishes, and more. Delicious Food • Affordable Price • Open 24 Hours"
      buttons={[
        {
          text: "Call Now (+91 96792 11094)",          href: "tel:+919679211094"},
        {
          text: "View Menu",          href: "#menu"},
        {
          text: "Get Directions",          href: "https://maps.app.goo.gl/..."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chicken-bbq_74190-716.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cartoon-style-shawarma-sauce_23-2150250198.jpg",          alt: "Happy regular customer"},
        {
          src: "http://img.b2bpic.net/free-photo/cheese-sticks-with-ketchup-mayonnaise-glass-lemonade_114579-3372.jpg",          alt: "Satisfied diner"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-chicken-doner-wrapped-lavash-lettuce-wooden-table_140725-11887.jpg",          alt: "Group at restaurant"},
        {
          src: "http://img.b2bpic.net/free-photo/salmon-wrap-sandwich-roll-with-cheese-vegetables-black-stone-background_123827-21138.jpg",          alt: "Local food lover"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-fork-with-food_23-2148899036.jpg",          alt: "Happy guest"},
      ]}
      avatarText="Join 500+ happy foodies"
      marqueeItems={[
        {
          type: "text",          text: "24/7 Service"},
        {
          type: "text",          text: "Authentic Taste"},
        {
          type: "text",          text: "Affordable Prices"},
        {
          type: "text",          text: "Fresh Ingredients"},
        {
          type: "text",          text: "Quick Delivery"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="About Ishani Restaurant"
      metrics={[
        {
          icon: Clock,
          label: "Service",          value: "24/7"},
        {
          icon: DollarSign,
          label: "Avg. Price",          value: "₹200-400"},
        {
          icon: MapPin,
          label: "Location",          value: "Contai"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Chicken Roll",          price: "₹45",          variant: "Rolls",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-s-hand-taking-gua-bao-from-white-plate-wooden-table_23-2148123743.jpg"},
        {
          id: "2",          name: "Chicken Noodles",          price: "₹100",          variant: "Noodles",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-vegetable-salad-inside-tray-grey-table_140725-131697.jpg"},
        {
          id: "3",          name: "Chicken Tikka",          price: "₹140",          variant: "Tandoor",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-kebab-with-tomatoes-other-dish_23-2148685493.jpg"},
        {
          id: "4",          name: "Paneer Tikka",          price: "₹125",          variant: "Tandoor",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-high-protein-meal-composition_23-2149089634.jpg"},
        {
          id: "5",          name: "Hot & Sour Soup",          price: "₹45",          variant: "Soups",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-delicious-chinese-food-dark-background_24972-2162.jpg"},
        {
          id: "6",          name: "Egg Maggi",          price: "₹50",          variant: "Maggi",          imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-asian-ramen-noodles-with-coriander-bowl-chopsticks-dark-table_140725-146272.jpg"},
      ]}
      title="Our Menu"
      description="Delicious rolls, noodles, tandoori, and more."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Clock,
          title: "Open 24 Hours",          description: "We are always ready to serve you."},
        {
          icon: DollarSign,
          title: "Affordable Pricing",          description: "Great taste at budget-friendly rates."},
        {
          icon: Utensils,
          title: "Dine-in Available",          description: "Comfortable seating for you and family."},
        {
          icon: Car,
          title: "Drive-through",          description: "Quick pick up for your convenience."},
        {
          icon: ShieldCheck,
          title: "No-contact Delivery",          description: "Safety prioritized in every order."},
      ]}
      title="Why Choose Ishani?"
      description="Experience quick service and affordable quality."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Rahul P.",          role: "Foodie",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-plate-with-food_23-2148899057.jpg"},
        {
          id: "2",          name: "Ananya D.",          role: "Regular",          company: "Local",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006709.jpg"},
        {
          id: "3",          name: "Suman K.",          role: "Student",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-smiley-people-with-drinks_23-2150124809.jpg"},
        {
          id: "4",          name: "Bikram M.",          role: "Traveler",          company: "Visitor",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/young-gardener-man-wearing-jumpsuit-hat-holding-pumpkin_141793-47294.jpg"},
        {
          id: "5",          name: "Ishita S.",          role: "Resident",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-redhead-woman-having-fun-while-having-dinner-with-friends-home_637285-3551.jpg"},
      ]}
      kpiItems={[
        {
          value: "3.9",          label: "Rating"},
        {
          value: "61+",          label: "Reviews"},
        {
          value: "100%",          label: "Tasty"},
      ]}
      title="Customer Reviews"
      description="Join our happy family of food lovers."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      text="Visit us at Near Central Bus Stand, Dhandighi, Contai, West Bengal. Call us now at +91 96792 11094."
      buttons={[
        {
          text: "Call Now",          href: "tel:+919679211094"},
        {
          text: "Get Directions",          href: "https://maps.app.goo.gl/..."},
        {
          text: "WhatsApp Us",          href: "https://wa.me/919679211094"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About",              href: "#about"},
            {
              label: "Menu",              href: "#menu"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "WhatsApp",              href: "https://wa.me/919679211094"},
          ],
        },
      ]}
      logoText="Ishani Restaurant"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
