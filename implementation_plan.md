# AION Ebook 4.3 Replacement

## Scope

Replace only the paid AION PDF source and the corresponding private Vercel Blob used by the verified Stripe purchase flow. Keep the public page, price, checkout behavior, filename, and the other paid books unchanged.

## Steps and validation

1. Replace `src/private/downloads/aion-engineering-the-organization-for-the-age-of-agents.pdf` with the Slack attachment `F0C5ACWMK53`.
2. Validate the file as an unencrypted, readable PDF and record its byte size, page count, and SHA-256 digest.
3. Run the repository tests and build, then review the focused diff and whitespace checks.
4. Commit, push, merge to `main`, upload the changed private asset through the repository's existing Vercel Blob synchronizer, and verify the live blob digest.

## Expected outcome

New AION purchases download version 4.3 from the existing private purchase path, while all checkout and access controls remain unchanged.

## Risks and recovery

- A malformed PDF could break delivery; validation and build checks run before upload.
- An interrupted blob overwrite could leave uncertain state; compare the remote manifest and downloaded blob digest before claiming completion.
- Recovery is to restore the previous tracked PDF (`be1165b86a5dda7770fa51627cd6ee3da87f286cb441d5b59a04dddb70a5cea4`) and run the same synchronizer, without changing checkout code or payment records.
