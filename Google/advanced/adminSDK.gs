/**
 * Lists all the users in a domain sorted by first name.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list
 */
function listAllUsers() {
  let pageToken;
  let page;
  do {
    page = AdminDirectory.Users.list({
      domain: 'suite.sachtony.com',
      orderBy: 'givenName',
      maxResults: 100,
      pageToken: pageToken
    });
    const users = page.users;
    if (!users) {
      Logger.log('No users found.');
      return;
    }
    // Print the user's full name and email.
    for (const user of users) {
      Logger.log('%s (%s)', user.name.fullName, user.primaryEmail);
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
}
