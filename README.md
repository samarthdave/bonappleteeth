# bonappleteeth

so you can just `wget` bonappetit.com or nytimes.com and read the article for free?

### follow steps in "instructions" or

just wget the article. this project is a fancy http GET layer that uses Vercel's edge functions

```bash
wget https://www.bonappetit.com/recipe/fettuccine-alfredo -O pasta.html
open pasta.html
```

### instructions

```bash
npm install

# then push to vercel
vercel
# or
vercel --prod
```

Then visit:
```bash
https://MY-VERCEL-PROJECT.vercel.app/main?URL=TARGET_URL_HERE

# ex
https://MY-VERCEL-PROJECT.vercel.app/api/main?URL=https://www.bonappetit.com/recipe/easiest-vanilla-cake-recipe?download=true
```