const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/aayus/.gemini/antigravity/brain/1ddf1c8d-7976-41f8-9871-86a3db0aeac2/.user_uploaded';
const outDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Each item has custom crop parameters to eliminate:
// 1. All rounded corner cutouts (border-radius)
// 2. All side borders
// 3. All bottom/top gradient shadows (baked overlays)
// 4. Any edge blur
const mapping = [
  {
    id: 'hero',
    file: 'media_1795523744997_1fb75c33.jpg',
    out: 'hero-students-campus.jpg',
    title: 'Hero Section: Students on Campus Lawn',
    crop: { left: 16, top: 16, right: 16, bottom: 20 },
    sharpen: { sigma: 1.2, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'why',
    file: 'media_1795523744955_b9ff2785.jpg',
    out: 'why-students-learning.jpg',
    title: 'Why Choose EduRise: Students Thumbs Up',
    crop: { left: 20, top: 20, right: 20, bottom: 20 },
    sharpen: { sigma: 1.2, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'course-pgdm',
    file: 'media_1795523744843_349c519e.jpg',
    out: 'course-pgdm.jpg',
    title: 'Courses: PGDM (Male student with glasses)',
    crop: { left: 18, top: 18, right: 18, bottom: 20 },
    sharpen: { sigma: 1.3, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'course-pgdm-ib',
    file: 'media_1795523744960_edbb6456.jpg',
    out: 'course-pgdm-ib.jpg',
    title: 'Courses: PGDM IB (Female student in hallway)',
    crop: { left: 18, top: 18, right: 18, bottom: 20 },
    sharpen: { sigma: 1.3, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'course-pgdm-fm',
    file: 'media_1795523744843_375c9a95.jpg',
    out: 'course-pgdm-fm.jpg',
    title: 'Courses: PGDM FM (Male student in brown polo)',
    crop: { left: 18, top: 18, right: 18, bottom: 20 },
    sharpen: { sigma: 1.3, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'course-pgdm-bda',
    file: 'media_1795523744937_52e6d329.jpg',
    out: 'course-pgdm-bda.jpg',
    title: 'Courses: PGDM BDA (3 students with laptop)',
    crop: { left: 18, top: 18, right: 18, bottom: 20 },
    sharpen: { sigma: 1.4, m1: 1.5, m2: 3.0 }
  },
  {
    id: 'course-executive-pgdm',
    file: 'media_1795523744910_93705fd2.jpg',
    out: 'course-executive-pgdm.jpg',
    title: 'Courses: Executive PGDM (Classroom lecture banner)',
    // remove bottom 38px where dark overlay was present
    crop: { left: 14, top: 14, right: 14, bottom: 38 },
    sharpen: { sigma: 1.5, m1: 1.5, m2: 3.0 }
  },
  {
    id: 'course-certificate-programs',
    file: 'media_1795523744843_085db0f9.jpg',
    out: 'course-certificate-programs.jpg',
    title: 'Courses: Certificate Programs (Graduation cap on book)',
    crop: { left: 16, top: 16, right: 16, bottom: 18 },
    sharpen: { sigma: 1.2, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'faculty-arjun-sharma',
    file: 'media_1795523744843_d25afcc2.jpg',
    out: 'faculty-arjun-sharma.jpg',
    title: 'Faculty: Dr. Arjun Sharma (Professor & Program Chair)',
    crop: { left: 18, top: 18, right: 18, bottom: 20 },
    sharpen: { sigma: 1.2, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'faculty-neha-gupta',
    file: 'media_1795523744997_481119c8.jpg',
    out: 'faculty-neha-gupta.jpg',
    title: 'Faculty: Prof. Neha Gupta (Associate Professor - Finance)',
    // remove bottom 40px dark shadow
    crop: { left: 18, top: 18, right: 18, bottom: 42 },
    sharpen: { sigma: 1.2, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'faculty-rohan-mehta',
    file: 'media_1795523744988_ef38ee9e.jpg',
    out: 'faculty-rohan-mehta.jpg',
    title: 'Faculty: Dr. Rohan Mehta (Associate Professor - Marketing)',
    // remove bottom 45px dark shadow
    crop: { left: 18, top: 18, right: 18, bottom: 45 },
    sharpen: { sigma: 1.2, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'faculty-isha-verma',
    file: 'media_1795523744991_edf73f61.jpg',
    out: 'faculty-isha-verma.jpg',
    title: 'Faculty: Prof. Isha Verma (Assistant Professor - HR & OB)',
    crop: { left: 18, top: 18, right: 18, bottom: 20 },
    sharpen: { sigma: 1.2, m1: 1.2, m2: 2.5 }
  },
  {
    id: 'faq-student',
    file: 'media_1795523744896_214fc51f.jpg',
    out: 'faq-student.jpg',
    title: 'FAQ Section: Student in Yellow Sweater',
    crop: { left: 18, top: 18, right: 18, bottom: 20 },
    sharpen: { sigma: 1.2, m1: 1.2, m2: 2.5 }
  }
];

async function processAll() {
  const results = [];
  for (const item of mapping) {
    const inPath = path.join(srcDir, item.file);
    const outPath = path.join(outDir, item.out);
    
    const img = sharp(inPath);
    const meta = await img.metadata();
    
    const cropW = meta.width - item.crop.left - item.crop.right;
    const cropH = meta.height - item.crop.top - item.crop.bottom;
    
    await img
      .extract({
        left: item.crop.left,
        top: item.crop.top,
        width: cropW,
        height: cropH
      })
      .sharpen(item.sharpen)
      .modulate({
        brightness: 1.02,
        saturation: 1.05
      })
      .jpeg({
        quality: 100,
        chromaSubsampling: '4:4:4',
        mozjpeg: true
      })
      .toFile(outPath);
      
    const stat = fs.statSync(outPath);
    const info = {
      id: item.id,
      title: item.title,
      out: item.out,
      width: cropW,
      height: cropH,
      ratio: (cropW / cropH).toFixed(2),
      sizeKB: (stat.size / 1024).toFixed(1),
      path: '/images/' + item.out
    };
    results.push(info);
    console.log('CLEAN & SHARP: ' + info.out + ' (' + info.width + 'x' + info.height + ', ratio ' + info.ratio + ', ' + info.sizeKB + ' KB)');
  }
  
  fs.writeFileSync(path.join(outDir, 'images-manifest.json'), JSON.stringify(results, null, 2));
  console.log('Saved images-manifest.json');
}

processAll().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
