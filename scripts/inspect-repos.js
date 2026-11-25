const https = require('https');
const fs = require('fs');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node.js' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  console.log('--- FETCHING HAULIX TREE ---');
  const haulixTree = JSON.parse(await get('https://api.github.com/repos/Ayushi1352/haulix-landing-page/git/trees/main?recursive=1'));
  if (haulixTree.tree) {
    fs.writeFileSync('scripts/haulix-tree.json', JSON.stringify(haulixTree.tree.map(t => t.path), null, 2));
    console.log('Haulix files count:', haulixTree.tree.length);
  } else {
    console.log('Haulix response:', haulixTree);
  }

  console.log('--- FETCHING WEDDING TREE ---');
  const weddingTree = JSON.parse(await get('https://api.github.com/repos/Shubh9540/wedding-planner-01/git/trees/main?recursive=1'));
  if (weddingTree.tree) {
    fs.writeFileSync('scripts/wedding-tree.json', JSON.stringify(weddingTree.tree.map(t => t.path), null, 2));
    console.log('Wedding files count:', weddingTree.tree.length);
  } else {
    console.log('Wedding response:', weddingTree);
  }

  console.log('--- FETCHING WEDDING templates.json ---');
  const weddingTemplates = await get('https://raw.githubusercontent.com/Shubh9540/wedding-planner-01/main/data/templates.json');
  fs.writeFileSync('scripts/wedding-templates.json', weddingTemplates);
  console.log('Saved wedding-templates.json, length:', weddingTemplates.length);

  console.log('--- FETCHING HAULIX templates.json & types ---');
  const haulixTemplates = await get('https://raw.githubusercontent.com/Ayushi1352/haulix-landing-page/main/data/templates.json');
  fs.writeFileSync('scripts/haulix-templates.json', haulixTemplates);
  
  const haulixTypes = await get('https://raw.githubusercontent.com/Ayushi1352/haulix-landing-page/main/types/templates.types.ts');
  fs.writeFileSync('scripts/haulix-types.ts', haulixTypes);

  const haulixPackage = await get('https://raw.githubusercontent.com/Ayushi1352/haulix-landing-page/main/package.json');
  fs.writeFileSync('scripts/haulix-package.json', haulixPackage);

  console.log('Done downloading reference data!');
}

run().catch(err => {
  console.error('Error:', err);
});
