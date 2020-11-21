---
slug: choices/auth
title: Choosing HMAC over RSA
author: Sumuk Shashidhar
author_title: Co-Founder and Backend Developer @ PeerAdmit
author_url: https://github.com/sumukshashidhar
author_image_url: https://avatars1.githubusercontent.com/u/46789005?s=400&u=c9f2b3b29f1f4794ce82a0b36fd2f2ae63bc89ff&v=4
tags: [authentication, peeradmit]
---

## Why I chose HMAC over RSA

I am a strong advocate for the public-private key pair system of signing, but in our case, I have made the choice as the
sole developer to use the general private key signing method over RSA. This is mainly because of a few reasons

1. Easier to manage
    1. I believe that when this site does scale, it will be relatively harder to manage two key pairs.
    2. A single private key that I alone know, will do wonders!

2. There is no requirement for frontend based key verification.
    1. Everything is handled in the backend at the moment, so there is no need for a key pair

3. Easy to migrate if needed
    1. If a migration is necessary (to the key-pair) system, in the future, it is easy to do so.


## Contact

We would love to hear from you. To contact me, you can email me at [firstname]@sumukshashidhar.com with any suggesstions or comments that you might have going forward.
