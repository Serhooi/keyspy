# KEYSPY Customization Guide

This guide provides step-by-step instructions for customizing your KEYSPY platform without requiring any coding knowledge.

## Accessing the Theme Customizer

KEYSPY includes a built-in visual theme customizer that allows you to change the appearance of your application in real-time:

1. Navigate to any page in your KEYSPY application
2. Look for the settings icon (gear) in the bottom-right corner of the screen
3. Click this icon to open the Theme Customizer panel

## Available Customization Options

### Brand Name

Change the displayed name of your application throughout the platform:

1. In the Theme Customizer, find the "Brand Name" field
2. Enter your desired brand name
3. The change will be applied immediately throughout the application

### Primary Color

Choose from several color themes to match your brand:

1. In the Theme Customizer, find the "Primary Color" section
2. Click on any of the color swatches (Blue, Purple, Green, Indigo, or Teal)
3. The application will immediately update to reflect your chosen color scheme

### Light/Dark Mode

Switch between light and dark color schemes:

1. In the Theme Customizer, find the "Mode" section
2. Click either "Light" or "Dark" to switch between modes
3. The entire application will update to use your preferred color scheme

### Font Family

Change the typography throughout the application:

1. In the Theme Customizer, find the "Font Family" dropdown
2. Select from available options (Inter, Roboto, Poppins, or Montserrat)
3. The text throughout the application will update to use your chosen font

### Border Radius

Adjust how rounded the corners are on UI elements:

1. In the Theme Customizer, find the "Border Radius" dropdown
2. Choose from Small, Medium, Large, or Extra Large
3. All buttons, cards, and UI elements will update to reflect your preference

## Editing Text Content

All text content in KEYSPY can be easily modified through a central configuration file:

1. Navigate to the `src/config.ts` file in your project
2. This file contains all editable text organized in sections:
   - Brand Information
   - Contact Information
   - Social Media Links
   - Feature Descriptions
   - Pricing Plans
   - Navigation Items
   - Call to Action Buttons

3. Simply edit the text values in this file to update content throughout the application

## Saving Your Changes

After making customizations:

1. For theme changes via the Theme Customizer:
   - Click "Apply Changes" to save your settings
   - Your preferences will be stored in the browser's localStorage

2. For text content changes in the config file:
   - Save the file
   - Rebuild and redeploy the application using the instructions in the Deployment Guide

## Resetting to Defaults

If you want to revert to the original theme settings:

1. Open the Theme Customizer
2. Click "Reset to Default" at the bottom of the panel
3. Your theme will return to the original settings
