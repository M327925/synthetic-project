import { createJourney } from '@elastic/synthetics';

export default createJourney(async ({ page }) => {
  // Go to Google
  await page.goto('https://www.google.com');
  
  // Type into the search bar
  await page.type('input[name="q"]', 'Elastic Search');
  
  // Click the Google Search button
  await page.click('input[name="btnK"]');
  
  // Wait for the results page to load
  await page.waitForNavigation();
  
  // Close the tab after the test
  await page.close();
});
