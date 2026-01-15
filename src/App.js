
import './App.css';
import Aos from 'aos';
import React, { useState } from 'react';
import './linkedin1.png';
import ProgressBar from "@ramonak/react-progress-bar";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
function App() {
  Aos.init();
  const [show, setShow] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
const [selectedProject, setSelectedProject] = useState(null);

const [showCtfModal, setShowCtfModal] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const projects = [
  {
    title: "Multifunctional Desk – 3D Modeling in AutoCAD",
    tools: "AutoCAD",
    cardImg: "projects/chaise-removebg-preview.png",
    modalImg: "projects/Desk1.png",
description: `This project represents a multifunctional desk that I fully designed and modeled in 3D using AutoCAD. The goal was to create an ergonomic, compact, and aesthetic piece of furniture adapted to a modern workspace.

The design combines several features: a main work surface with curved lines for improved comfort, integrated upper shelves for document and object storage, a side cabinet with an ergonomic handle, and lower drawers providing additional storage space.

The choice of colors and materials aims to create a balance between simplicity, modernity, and warmth, while highlighting the volumes and details of the furniture.

This project allowed me to develop my skills in 3D modeling, furniture design, proportion management, and project visualization. It demonstrates my ability to independently design a product from the initial concept to the final representation.`,

    link: "https://www.behance.net/gallery/241986851/Modlisation-dun-Bureau-multifonction",
    linkLabel: "Find it on Behance →",
  },
  {
    title: "Storage Wardrobe – 3D Modeling in AutoCAD",
    tools: "AutoCAD",
    cardImg: "projects/wardrobe1-removebg-preview.png",
    modalImg: "projects/Wardrobe.png",
    description:
      
        `This project consists of the design and 3D modeling of a storage wardrobe entirely created using AutoCAD. The objective was to design a functional, elegant piece of furniture adapted to modern domestic use.
The wardrobe is organized into several compartments to optimize interior space:
A hanging section with a clothing rail,
Side shelves for folded storage,
Integrated drawers for accessories and small items.
The choice of dark wood combined with golden accents gives the wardrobe a warm and refined visual identity. The interior layout was designed to provide practicality, ergonomics, and aesthetic balance.
This project helped me strengthen my skills in furniture design, interior space organization, 3D modeling, and product visualization. It reflects my ability to independently design a complete piece of furniture, from structural concept to functional details.`
   ,
    link: "https://www.behance.net/gallery/241987165/Modelisation-dun-Armoire-de-rangement?tracking_source=project_owner_other_projects",
    linkLabel: "Find it on Behance →",
  },
    {
    title: "Table – 3D Modeling in AutoCAD",
    tools: "AutoCAD",
    cardImg: "projects/width_458-removebg-preview.png",
    modalImg: "projects/table1.png",
    description:
      
        `Design and 3D modeling of an original table created in AutoCAD, characterized by a sculptural structure composed of curved legs forming a dynamic and balanced composition. The circular tabletop brings softness and harmony, while the metal base reinforces stability and the visual identity of the furniture.
The contrast between organic forms and materials highlights the contemporary character of the project. The sober color palette emphasizes the elegance and modernity of the overall design.
This work demonstrates my ability to design creative furniture, master complex form modeling, and propose objects with strong aesthetic and functional value.`
   ,
    link: "https://www.behance.net/gallery/242206841/Table-Conception-et-modlisation-3D-sous-AutoCAD",
    linkLabel: "Find it on Behance →",
  },
      {
    title: "Design Base – Conceptual Modeling in AutoCAD",
    tools: "AutoCAD",
    cardImg: "projects/socle1.png",
    modalImg: "projects/socle.png",
    description:
      
        `This project presents the design of a contemporary geometric base, fully modeled in AutoCAD. The concept is built on the combination of circular shapes with vertical and diagonal lines, creating a structure that is light, dynamic, and architectural.
The base is designed as a versatile support that can be used for a decorative object, a sculpture, or an exhibition element. The graphic composition highlights the balance between stability and visual transparency while maintaining a strong aesthetic identity.
The choice of a dark and uniform color emphasizes the purity of the lines and reinforces the modern character of the design. This project demonstrates my ability to create abstract forms, master geometric modeling, and explore minimalist design concepts.
This work helped me develop my creativity, precision in volume construction, and understanding of three-dimensional structures.`
   ,
    link: "https://www.behance.net/gallery/241987337/Modelisation-dun-Socle",
    linkLabel: "Find it on Behance →",
  },
   {
    title: "chair Lounge – 3D Modeling in AutoCAD",
    tools: "AutoCAD",
    cardImg: "projects/width_550-removebg-preview.png",
    modalImg: "projects/chair_loung.png",
    description:
      
        `This project presents the design and 3D modeling of a contemporary ergonomic chaise lounge, entirely created in AutoCAD. The curved structure naturally follows the body posture, providing optimal comfort while maintaining an elegant aesthetic.
The chair is composed of a wooden base with smooth flowing lines, combined with padded cushions arranged in segments to improve support for the back and legs. The inclined backrest enhances the feeling of relaxation, while the discreet legs ensure overall stability.
The color palette, based on warm and neutral tones, was selected to highlight the softness of the shapes and the modern appearance of the furniture. This project demonstrates my ability to combine ergonomics, design, and precise modeling.
This work allowed me to develop my skills in furniture design, organic modeling, material management, and product visualization.`
   ,
    link: "https://www.behance.net/gallery/242207299/Chaise-longue-Modlisation-3D-sous-AutoCAD",
    linkLabel: "Find it on Behance →",
  },
     {
    title: "chair Lounge – 3D Modeling in AutoCAD",
    tools: "AutoCAD",
    cardImg: "projects/chairlogo.png",
    modalImg: "projects/chair2.png",
    description:
      
        `This project presents the design and 3D modeling of a contemporary chair, entirely created in AutoCAD. The structure is based on an exposed metal frame, ensuring strength, stability, and visual lightness.
The seat and backrest, with strong geometric shapes, create a dynamic contrast with the structure. The inclined backrest provides ergonomic comfort while giving the chair a strong and modern identity. The integrated armrests enhance functionality and user comfort.
The color palette, composed of deep and contrasting tones, was chosen to emphasize the graphic character of the design and highlight the furniture volumes.
This project allowed me to develop my skills in furniture design, structural modeling, part assembly, and product visualization. It demonstrates my ability to transform a concept into a functional and aesthetic object.`
   ,
    link: "https://www.behance.net/gallery/242208011/Chaise-design-Modlisation-3D-sous-AutoCAD",
    linkLabel: "Find it on Behance →",
  },
     {
    title: "TV Unit – 3D Modeling in AutoCAD",
    tools: "AutoCAD",
    cardImg: "projects/tv-removebg-preview.png",
    modalImg: "projects/tv_unit.png",
    description:
      
        `Design and 3D modeling of a contemporary TV unit created in AutoCAD. The project highlights a balanced structure combining wood and metal, offering stability, elegance, and functionality. The geometric lines and clean volumes emphasize a modern aesthetic, while the integrated storage spaces optimize everyday use.
The color palette, composed of natural and contrasting tones, strengthens the visual identity of the furniture. This work demonstrates my mastery of 3D modeling, furniture design, technical assembly, and product presentation through both an aesthetic and functional approach.`
   ,
    link: "https://www.behance.net/gallery/242208451/Meuble-TV-Modlisation-3D-sous-AutoCAD",
    linkLabel: "Find it on Behance →",
  },
    {
    title: "TV Unit – 3D Design and Modeling in SketchUp",
    tools: "SketchUp",
    cardImg: "projects/tvsktchlogo.png",
    modalImg: "projects/tvsketch.png",
    description:
      
        ` 
Design and 3D modeling of a contemporary TV unit created in SketchUp, highlighting a compact and functional structure with clean geometric lines. The project integrates optimized storage spaces as well as a central area dedicated to the screen, promoting ergonomics and visual clarity.
The work on wood textures enhances the warm and elegant character of the furniture while emphasizing volumes and proportions. This project demonstrates my ability to design functional furniture, master 3D modeling in SketchUp, and transform a concept into a realistic, aesthetic object suitable for domestic use`
   ,
    link: "https://www.behance.net/gallery/242241529/meuble-tv",
    linkLabel: "Find it on Behance →",
  },
   {
    title: "Logo – Graphic Design in Adobe Illustrator",
    tools: "Adobe Illustrator",
    cardImg: "projects/logoicon1.png",
    modalImg: "projects/logo1.png",
    description:
      
        ` Creation of a contemporary logo designed in Adobe Illustrator, based on an organic composition of fluid shapes evoking lightness, harmony, and balance. The combination of blue and violet provides a modern visual identity, symbolizing creativity, confidence, and innovation.
The clean, curved lines enhance the readability of the symbol while giving it an elegant and dynamic expression. This minimalist design allows easy adaptation across various communication media.
This project demonstrates my ability to create strong visual identities, master vector design, and translate abstract values into an aesthetic and memorable logo.`
   ,
    link: "https://www.behance.net/gallery/242241613/logo",
    linkLabel: "Find it on Behance →",
  },
     {
    title: "Logo – Graphic Design in Adobe Illustrator",
    tools: "Adobe Illustrator",
    cardImg: "projects/logoicon2.png",
    modalImg: "projects/logo2.png",
    description:
      
        ` Creation of a symbolic logo representing a stylized phoenix, designed in Adobe Illustrator. The design is based on fluid and dynamic lines, expressing the concepts of rebirth, power, and elegance. The upward shape of the wings conveys movement, ambition, and evolution, while the clean silhouette ensures excellent readability.
The golden tone enhances the noble, prestigious, and timeless character of the symbol. This project demonstrates my ability to design logos with strong symbolic value, master graphic composition, and create impactful and memorable visual identities.`
   ,
    link: "https://www.behance.net/gallery/242241687/logo",
    linkLabel: "Find it on Behance →",
  },
      {
    title: "Logo – Graphic Design in Adobe Illustrator",
    tools: "Adobe Illustrator",
    cardImg: "projects/logo3logo.png",
    modalImg: "projects/logo3.png",
    description:
      
        `Creation of a contemporary logo designed in Adobe Illustrator, based on a circular composition of curved shapes evoking movement, harmony, and continuity. The radial organization of the elements creates a strong central focal point, enhancing the balance and readability of the symbol.
The combination of gray and gold adds elegance, subtlety, and modernity while strengthening the visual identity. The clean design allows versatile use across digital and printed media.
This project demonstrates my ability to design coherent, aesthetic, and memorable logos, as well as my mastery of vector graphic creation tools.`
   ,
    link: "https://www.behance.net/gallery/242241727/logo",
    linkLabel: "Find it on Behance →",
  },
        {
    title: "Logo – Graphic Design in Adobe Illustrator",
    tools: "Adobe Illustrator",
    cardImg: "projects/logo4logo.png",
    modalImg: "projects/logo4.png",
    description:
      
        `Creation of a modern and dynamic logo developed in Adobe Illustrator, based on a circular composition of curved shapes symbolizing movement, energy, and continuity. The alternation of orange and gray creates strong contrast and a balanced visual identity that is both professional and expressive.
The clean design ensures optimal readability and easy adaptation across various communication media. This project demonstrates my ability to create coherent visual identities, master vector tools, and translate abstract values into a strong and memorable graphic symbol.`
   ,
    link: "https://www.behance.net/gallery/242241797/logo",
    linkLabel: "Find it on Behance →",
  },
         {
    title: "Sofa / Armchair – 3D Design and Modeling in Fusion 360",
    tools: "Fusion 360",
    cardImg: "projects/sofalogo.png",
    modalImg: "projects/sofa.png",
    description:
      
        `Design and 3D modeling of an organically shaped sofa created in Fusion 360, highlighting enveloping and ergonomic forms that promote comfort and conviviality. The work on the woven texture enhances the natural and warm character of the furniture while emphasizing its volumes and curves.
The continuous and harmonious lines create a modern and welcoming silhouette. The sober color palette reinforces the elegance and visual balance of the design.
This project demonstrates my ability to design furniture with complex forms, master parametric modeling, and produce realistic and aesthetic visualizations suitable for professional presentation.`
   ,
    link: "https://www.behance.net/gallery/242241797/logo",
    linkLabel: "Find it on Behance →",
  },
  // ...add the rest (up to 32)
];

  return (
    <div className="App">
     <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
 
  <header id="header" class="d-flex flex-column justify-content-center">

    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#home" class="nav-link scrollto "><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Projects</span></a></li>
     
  
      {/*  <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Download CV</span></a></li> */}
   <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav>
  </header>
  <section id="home" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Mohammed Aziz Khrouf</h1>
      <p class="typewriter "> Product Design Student @ISAMS | Furniture & Object Design enthusiast  </p>
 
      <div class="social-links">
   


        <a href="https://github.com/Louaykharouf26" class="google-plus"><i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/mohammed-aziz-khrouf-b141a9319/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        <a href="https://www.behance.net/azizkharouf" class="medium"><i class="bi bi-behance"></i></a>
 
      </div>
    </div>
</section>
<main id="main">
<section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>About</h2>
     <p>
  <strong>Product Design student at ISAMS</strong>, passionate about creating new
  product ideas and graphic designs that combine creativity and functionality.
  <br />
  I enjoy working on <strong>product concepts</strong>, <strong>logos</strong>,
  and <strong>visual designs</strong>, as well as preparing projects for
  manufacturing processes such as <strong>CNC</strong> and
  <strong>laser cutting</strong>.
  <br />
  Motivated, detail-oriented, and always eager to learn and improve my
  <strong>design skills</strong>.
</p>

    </div>

    <div className="row">
      {/* Image */}
      <div className="col-lg-3 text-center">
        <img
          src={require("./linkedin1.png")}
          className="img-fluid"
          alt="Louay"
          style={{ maxWidth: "200px", borderRadius: "12px" }}
        />
      </div>

      {/* Content */}
      <div className="col-lg-9 pt-4 pt-lg-0 content">
<h3>
  Product Design Student @ ISAMS | Furniture &amp; Object Design | Design Enthusiast
</h3>


        <p className="fst-italic">
         Product Design – Furniture Design – 3D Modeling – Graphic Design – CNC & Laser Cutting – Visual Communication - AutoCAD - Adobe Illustratore - SketchUP
        </p>

        <div className="row mt-4">
  {/* Details */}
  <div className="col-lg-12">
    <h4>Details</h4>
    <div className="row">
      <div className="col-md-6">
        <ul>
          <li>
            <i className="bi bi-chevron-right"></i>{" "}
            <strong>City:</strong>{" "}
            <span>Tunis, Tunisia</span>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i>{" "}
            <strong>Phone:</strong>{" "}
            <span>+216 29 322 889</span>
          </li>
        </ul>
      </div>

      <div className="col-md-6">
        <ul>
          <li>
            <i className="bi bi-chevron-right"></i>{" "}
            <strong>Degree:</strong>{" "}
            <span>Product Design Student</span>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i>{" "}
            <strong>Availability:</strong>{" "}
            <span>Open to collaboration / Freelance</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</section>



<section id="skills" className="skills section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Skills</h2>
      <p>
        Here is a highlight of the tools I use for cloud and DevOps automation and
        energy consumption measurement.
      </p>
    </div>

    {/* Tools marquee */}
    <div className="tech-slider">
      <div className="tech-track">
      {[
  "autocad.png",
  "canva.png",
  "corel.png",
  "fusion.svg",
  "illustrator.png",
  "Photoshop-logo.png",
  "sketchup.jpg",
  "vectorMagic.jpg",
]
  .concat([
    "autocad.png",
    "canva.png",
    "corel.png",
    "fusion.svg",
    "illustrator.png",
    "Photoshop-logo.png",
    "sketchup.jpg",
    "vectorMagic.jpg",
  ])
  .map((icon, idx) => (
    <img
      key={idx}
      src={`/icons/${icon}`}
      alt={icon.replace(/[-_]/g, " ").replace(/\.(png|svg|jpg)$/i, "")}
      loading="lazy"
    />
  ))}

         
      </div>
    </div>

  
  </div>
</section>


        <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
      <div class="section-title">
          <h2>Resume</h2>
<a
  href={require("./LouaykharoufCV.pdf")}
  download
  className="btn btn-outline-dark"
>
  Download my resume for more details
</a>



          </div>
          <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Mohammed Aziz Khrouf</h4>
              <p><em>
Product Design Student @ ISAMS, Furniture & Object Design Enthusiast, 3D Modeling and Graphic Design Explorer
                </em></p>
              <ul>
                <li>Tunis , Tunisia</li>
                <li>+216 29 322 889 </li>
                <li>kharoufaziz12@gmail.com</li>
              </ul>
            </div>
            <h3 class="resume-title">Education</h3>
         <div class="resume-item">
  <h4>Bachelor’s Degree in Industrial & Product Design</h4>
  <h5>2023 – 2026</h5>
  <p><em>Higher Institute of Arts and Crafts of Sfax (ISAMS)</em></p>
  <p>
    Specialized in product and furniture design using digital tools such as AutoCAD, Illustrator, and Canva, with a focus on creative concept development and manufacturing-oriented design.
  </p>
</div>


            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
  <h3 class="resume-title">Professional Experience</h3>

  <div class="resume-item">
    <h4>Graphic Designer Intern</h4>
    <h5>July 2025 – August 2025</h5>
    <p><em>OriWOOD, Gabès, Tunisia</em></p>
    <p>
      • Designed logos and product components adapted for laser cutting and engraving.<br />
      • Prepared vector-based files optimized for laser cutting (precision, scale, material constraints).<br />
      • Adapted designs according to technical requirements and manufacturing limitations.<br />
      • Collaborated with production teams to ensure design feasibility and quality output.
    </p>
  </div>
 <div class="resume-item">
  <h4>Product Designer (Freelance)</h4>
  <h5>April 2025 – May 2025</h5>
  <p><em>OriWOOD, Gabès, Tunisia</em></p>
  <p>
    • Converted client-provided images into pixelated and vector-ready designs suitable for CNC machining.<br />
    • Optimized designs to meet CNC machine constraints (tolerances, tool paths, material limits).<br />
    • Converted raster images into clean vector files using image vectorization techniques (Vector Magic workflow).<br />
    • Ensured design accuracy and manufacturing compatibility for production processes.
  </p>
</div>


            </div>
            </div>
            
        </div>
        </section>
        <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">
      <div class="section-title">
          <h2>Projects</h2>
          <p>Here is some of my projects the code of each project is in my github</p>
          </div>
      
{/*    <div class="row">
<div className="col-lg-6" data-aos="fade-up">


<div className="col-lg-6" data-aos="fade-up">
  <div 
    className="project-card" 
    onClick={() => setShowCtfModal(true)}
    style={{ cursor: 'pointer' }}
  >
    <img src="projects/chaise-removebg-preview.png" className="project-card-img" alt="CTF Platform" />
    <div className="project-card-body">
      <h4>Multifunctional Desk – 3D Modeling in AutoCAD
</h4>
<p>Tools : AutoCAD</p>
      <p>Click to view details</p>
    </div>
  </div>

  {/* Modal */}
  {/*<Modal 
    show={showCtfModal} 
    onHide={() => setShowCtfModal(false)}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Multifunctional Desk</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img 
        src="projects/Desk1.png" 
        alt="Multifunctional Desk" 
        className="img-fluid mb-3" 
      />
 <p>This project represents a multifunctional desk that I fully designed and modeled in 3D using AutoCAD. The goal was to create an ergonomic, compact, and aesthetic piece of furniture adapted to a modern workspace.
The design combines several features: a main work surface with curved lines for improved comfort, integrated upper shelves for document and object storage, a side cabinet with an ergonomic handle, and lower drawers providing additional storage space.
The choice of colors and materials aims to create a balance between simplicity, modernity, and warmth, while highlighting the volumes and details of the furniture.
This project allowed me to develop my skills in 3D modeling, furniture design, proportion management, and project visualization. It demonstrates my ability to independently design a product from the initial concept to the final representation.</p>
    </Modal.Body>
    <Modal.Footer>
      <p><strong>Tools:</strong> AutoCAD</p>
      <p>
        <a 
          href="https://www.behance.net/gallery/241986851/Modlisation-dun-Bureau-multifonction" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          Find it in Behance →
        </a>
      </p>
    </Modal.Footer>
  </Modal>
  
</div>*/}

<div className="projects-grid">
  {projects.map((p, idx) => (
    <div
      key={idx}
      className="project-card"
      onClick={() => {
        setSelectedProject(p);
        setShowProjectModal(true);
      }}
      style={{ cursor: "pointer" }}
    >
      <img src={p.cardImg} className="project-card-img" alt={p.title} />
      <div className="project-card-body">
        <h4>{p.title}</h4>
        <p>Tools : {p.tools}</p>
        <p>Click to view details</p>
      </div>
    </div>
  ))}
</div>

<Modal
  show={showProjectModal}
  onHide={() => setShowProjectModal(false)}
  centered
>
  <Modal.Header closeButton>
    <Modal.Title>{selectedProject?.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    {selectedProject?.modalImg && (
      <img
        src={selectedProject.modalImg}
        alt={selectedProject.title}
        className="img-fluid mb-3"
      />
    )}
    <p>{selectedProject?.description}</p>
  </Modal.Body>

  <Modal.Footer className="justify-content-between">
    <p className="m-0">
      <strong>Tools:</strong> {selectedProject?.tools}
    </p>

    {selectedProject?.link && (
      <a
        href={selectedProject.link}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        {selectedProject.linkLabel || "View project →"}
      </a>
    )}
  </Modal.Footer>
</Modal>

           
            </div>

              
                
          
  {/*  </div></div> */}
             
        
    
      </section>
    {/*  <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Download CV</h2>
          <p>Here u can Download my CV for more details </p>
        </div>
<center>
        
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <a href={require("./LouaykharoufCV.pdf")}  download>
  <img src={require("./portfoliodownload.png")} alt="CV" width="104" height="142"></img>
          </a>
          </div>
          </center>
          </div>
          
    </section>
     */}
   

<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Contact</h2>
      <p>
        Feel free to reach out for collaboration, research discussions, or
        professional opportunities.
      </p>
    </div>

    <div className="row">
      {/* Left: Contact Information */}
      <div className="col-lg-4">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>Tunis, Tunisia</p>
          </div>

          <div className="email">
            <i className="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>kharoufaziz12@gmail.com</p>
          </div>

          <div className="phone">
            <i className="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>+216 29 322 889</p>
          </div>
        </div>
      </div>

      {/* Right: Netlify Contact Form */}
      <div className="col-lg-8 mt-5 mt-lg-0">

        {/* Success message */}
        {typeof window !== "undefined" &&
          window.location.hash.includes("success=true") && (
            <div className="alert alert-success mb-4" role="alert">
              ✅ Your message has been sent successfully. I’ll get back to you
              soon.
            </div>
          )}

        <form
          name="contact"
          method="POST"
          action="/?success=true#contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="php-email-form"
        >
          {/* Netlify required hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field */}
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out if you’re human:{" "}
              <input name="bot-field" />
            </label>
          </p>

          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              required
            />
          </div>

          <div className="form-group mt-3">
            <textarea
              name="message"
              rows="5"
              className="form-control"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="text-center mt-4">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>



  </main>
    </div>
  );
}

export default App;
