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
      domain: 'vn.sachtony.com',
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

/**
 * Get a user by their email address and logs all of their data as a JSON string.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get
 */
function getUser() {
  // TODO (developer) - Replace userEmail value with yours
  const userEmail = 'admin@vn.sachtony.com';
  try {
    const user = AdminDirectory.Users.get(userEmail);
    Logger.log('User data:\n %s', JSON.stringify(user, null, 2));
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    Logger.log('Failed with error %s', err.message);
  }
}

/**
 * Adds a new user to the domain, including only the required information. For
 * the full list of user fields, see the API's reference documentation:
 * @see https://developers.google.com/admin-sdk/directory/v1/reference/users/insert
 */
function addUser() {
  let user = {
    // TODO (developer) - Replace primaryEmail value with yours
    primaryEmail: 'admin@vn.sachtony.com',
    name: {
      givenName: 'Admin',
      familyName: 'Sachtony'
    },
    // Generate a random password string.
    password: Math.random().toString(36)
  };
  try {
    user = AdminDirectory.Users.insert(user);
    Logger.log('User %s created with ID %s.', user.primaryEmail, user.id);
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    Logger.log('Failed with error %s', err.message);
  }
}

/**
 * Creates an alias (nickname) for a user.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users.aliases/insert
 */
function createAlias() {
  // TODO (developer) - Replace userEmail value with yours
  const userEmail = 'admin@vn.sachtony.com';
  let alias = {
    alias: 'admin@suite.sachtony.com'
  };
  try {
    alias = AdminDirectory.Users.Aliases.insert(alias, userEmail);
    Logger.log('Created alias %s for user %s.', alias.alias, userEmail);
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    Logger.log('Failed with error %s', err.message);
  }
}

/**
 * Lists all the groups in the domain.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/groups/list
 */
function listAllGroups() {
  let pageToken;
  let page;
  do {
    page = AdminDirectory.Groups.list({
      domain: 'groups.sachtony.com',
      maxResults: 100,
      pageToken: pageToken
    });
    const groups = page.groups;
    if (!groups) {
      Logger.log('No groups found.');
      return;
    }
    // Print group name and email.
    for (const group of groups) {
      Logger.log('%s (%s)', group.name, group.email);
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
}

/**
 * Adds a user to an existing group in the domain.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert
 */
function addGroupMember() {
  // TODO (developer) - Replace userEmail value with yours
  const userEmail = 'admin@vn.sachtony.com';
  // TODO (developer) - Replace groupEmail value with yours
  const groupEmail = 'admin@groups.sachtony.com';
  const member = {
    email: userEmail,
    role: 'MEMBER'
  };
  try {
    AdminDirectory.Members.insert(member, groupEmail);
    Logger.log('User %s added as a member of group %s.', userEmail, groupEmail);
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    Logger.log('Failed with error %s', err.message);
  }
}

/**
 * Logs the license assignments, including the product ID and the sku ID, for
 * the users in the domain. Notice the use of page tokens to access the full
 * list of results.
 */
function getLicenseAssignments() {
  const productId = 'Google-Apps';
  const customerId = 'suite.sachtony.com';
  let assignments;
  let pageToken;
  do {
    assignments = AdminLicenseManager.LicenseAssignments
        .listForProduct(productId, customerId, {
          maxResults: 500,
          pageToken: pageToken
        });
  } while (pageToken);
  // Print the productId and skuId
  for (const assignment of assignments.items) {
    Logger.log('userId: %s, productId: %s, skuId: %s',
        assignment.userId, assignment.productId, assignment.skuId);
  }
}

/**
 * Insert a license assignment for a user, for a given product ID and sku ID
 * combination.
 * For more details follow the link
 * https://developers.google.com/admin-sdk/licensing/reference/rest/v1/licenseAssignments/insert
 */
function insertLicenseAssignment() {
  const productId = 'Google-Apps';
  const skuId = 'Google-Vault';
  const userId = 'admin@suite.sachtony.com';
  try {
    const results = AdminLicenseManager.LicenseAssignments
        .insert({userId: userId}, productId, skuId);
    Logger.log(results);
  } catch (e) {
    // TODO (developer) - Handle exception.
    Logger.log('Failed with an error %s ', e.message);
  }
}

/**
 * Drive Service:
 * This service allows scripts to create, find, and modify files and folders in Google Drive
*/
// Log the name of every file in the user's Drive.
var files = DriveApp.getFiles();
while (files.hasNext()) {
  var file = files.next();
  Logger.log(file.getName());
}
