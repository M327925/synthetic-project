import { createJourney } from '@elastic/synthetics';

export default createJourney({
  name: 'Google Search Journey v2', // Custom journey name
  async ({ page }) => {
    // Go to Google
    await page.goto('https://www.google.com');
    
    // Type into the search bar
    await page.type('input[name="q"]', 'Elastic Search');
    
    // Wait for the search button to become visible
    await page.waitForSelector('input[name="btnK"]', { visible: true });
    
    // Click the Google Search button
    await page.click('input[name="btnK"]');
    
    // Wait for the results page to load (ensure the search result is visible)
    await page.waitForSelector('h3', { visible: true });
    
    // Take a screenshot to confirm success
    await page.screenshot({ path: 'google_search_results.png' });

    // Close the tab after the test
    await page.close();
  }
});
