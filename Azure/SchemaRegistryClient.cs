// Create a new SchemaRegistry client using the default credential from Azure.Identity using environment variables previously set,
// including AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, and AZURE_TENANT_ID.
// For more information on Azure.Identity usage, see: https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/identity/Azure.Identity/README.md
var client = new SchemaRegistryClient(fullyQualifiedNamespace: fullyQualifiedNamespace, credential: new DefaultAzureCredential());
