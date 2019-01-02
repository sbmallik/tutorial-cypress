describe('USAT Asset', () => {
  it('works', () => {
    cy.visit('https://uw.usatoday.com/story/tech/columnist/baig/2018/12/06/apple-watch-gets-ecg-feature-detecting-common-cause-strokes/2211563002/');
    cy.eyesOpen({
      appName: 'USAT Asset',
      testName: 'My first JavaScript test!',
      browser: [ 
        { width: 1024, height: 768, name: 'chrome' },
        { deviceName: 'iPhone X',  orientation: 'landscape' }
      ]
    });
//    cy.get('media-image[image-alt="New heart features on the Apple Watch"]', { timeout: 15000 }).should('have.class', 'spacer-large');
//    cy.wait(15000);
    cy.get('.story.primary-content', { timeout: 15000 })
    cy.get('story-byline[data-module-loaded="true"]', { timeout: 15000 })
    cy.get('media-image[image-alt="New heart features on the Apple Watch"]', { timeout: 15000 })
//    cy.eyesCheckWindow('Main Page');
    cy.eyesCheckWindow({
      tag: "Step1",
      sizeMode: "selector",
      selector: '.story-topper'
    });
    cy.eyesCheckWindow({
      tag: "Step2",
      sizeMode: "selector",
      selector: 'story-byline'
    });
    cy.eyesCheckWindow({
      tag: "Step3",
      sizeMode: "selector",
      selector: 'media-image[image-alt="New heart features on the Apple Watch"]'
    });
    cy.eyesClose();
  });
});
