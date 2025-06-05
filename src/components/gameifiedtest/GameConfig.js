// Game configuration
const gameConfig = {
  // Point values based on difficulty
  pointValues: {
    Easy: 10,
    Medium: 25,
    Hard: 50
  },
  // Multipliers for consecutive correct answers
  streakMultipliers: {
    3: 1.5,  // 3 correct in a row: 1.5x points
    5: 2.0,  // 5 correct in a row: 2x points
    10: 3.0  // 10 correct in a row: 3x points
  },
  // Badges and their requirements
  badges: [
    { name: "Beginner", icon: "🔰", pointsRequired: 50, message: "You've taken your first steps!" },
    { name: "Explorer", icon: "🧭", pointsRequired: 150, message: "You're exploring new territories!" },
    { name: "Problem Solver", icon: "🧩", pointsRequired: 300, message: "You're solving problems like a pro!" },
    { name: "Expert", icon: "🏆", pointsRequired: 700, message: "You've mastered the material!" },
    { name: "Genius", icon: "🧠", pointsRequired: 2000, message: "Absolutely brilliant work!" },
    { name: "Savant", icon: "🧠", pointsRequired: 100000, message: "You have arrived!  Take a moment to enjoy the view." }
  ],
  // Encouraging messages shown randomly
  encouragingMessages: [
    "Great job, keep going!",
    "You're doing fantastic!",
    "That's the way to do it!",
    "Excellent progress!",
    "You're on fire today!",
    "Keep up the good work!",
    "Impressive skills!",
    "You're crushing it!",
    "Stellar performance!",
    "Way to go!"
  ],
  // Adaptive testing configuration
  adaptiveTesting: {
    // Number of questions per difficulty level
    questionsPerDifficulty: {
      Easy: 5,
      Medium: 5,
      Hard: 5
    },
    // Thresholds for advancing to next difficulty
    advancementThreshold: 0.7,  // 70% correct to advance to next level
    // Thresholds for reducing difficulty
    reductionThreshold: 0.4,    // Below 40% correct returns to lower level
    // Minimum questions before test can end early
    minQuestionsRequired: 5,
    // Performance threshold for early termination
    earlyTerminationThreshold: {
      lowPerformer: 0.3,  // Below 30% correct on easy questions
      highPerformer: 0.9  // Above 90% correct on hard questions
    },
    // When loading questions (for large datasets)
    initialQuestionsPerDifficulty: 10  // Load this many questions per difficulty initially
  }
};

// Sample test data for demonstration
const sampleTestData = addUniqueIdsToQuestions([
  // Easy questions
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of velocity, as per the Machinery's Handbook?",
    "options": ["The rate of change of position", "The rate of change of acceleration", "The force applied to an object", "The energy stored in motion"],
    "answer": "The rate of change of position"
  },
    {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does CNC stand for in CNC machining?",
    "options": ["Computer Numerical Control", "Centralized Numeric Calibration", "Controlled Numeric Cutting", "Computerized Node Configuration"],
    "answer": "Computer Numerical Control"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary function of a CNC machine?",
    "options": ["To precisely control tools and machinery", "To design 3D models", "To print documents", "To assemble electronic circuits"],
    "answer": "To precisely control tools and machinery"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which material is commonly machined using CNC machines?",
    "options": ["Metal", "Paper", "Cloth", "Glass"],
    "answer": "Metal"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What type of tool is used to remove material in CNC machining?",
    "options": ["Cutting tool", "Measuring tape", "Screwdriver", "Hammer"],
    "answer": "Cutting tool"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the role of a CNC operator?",
    "options": ["To set up and monitor the machine", "To design the machine", "To repair electrical systems", "To market the machine"],
    "answer": "To set up and monitor the machine"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which software is often used to create CNC programs?",
    "options": ["CAD/CAM", "Microsoft Word", "Photoshop", "Excel"],
    "answer": "CAD/CAM"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common type of CNC machine?",
    "options": ["CNC Milling Machine", "CNC Typewriter", "CNC Oven", "CNC Scanner"],
    "answer": "CNC Milling Machine"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does CAM stand for in CNC machining?",
    "options": ["Computer-Aided Manufacturing", "Computer-Aided Modeling", "Centralized Automation Machine", "Controlled Axis Movement"],
    "answer": "Computer-Aided Manufacturing"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is used to hold the workpiece in a CNC machine?",
    "options": ["Vise or clamp", "Tape", "Glue", "Magnet"],
    "answer": "Vise or clamp"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a G-code in CNC machining?",
    "options": ["A programming language for CNC machines", "A type of cutting tool", "A safety protocol", "A machine model number"],
    "answer": "A programming language for CNC machines"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a spindle in a CNC machine?",
    "options": ["To rotate the cutting tool", "To cool the machine", "To hold the workpiece", "To power the machine"],
    "answer": "To rotate the cutting tool"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common safety practice in CNC machining?",
    "options": ["Wearing safety glasses", "Using bare hands", "Leaving tools on the machine", "Ignoring machine alarms"],
    "answer": "Wearing safety glasses"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a workpiece in CNC machining?",
    "options": ["The material being machined", "The cutting tool", "The machine itself", "The computer program"],
    "answer": "The material being machined"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which axis is typically the vertical axis in CNC machining?",
    "options": ["Z-axis", "X-axis", "Y-axis", "W-axis"],
    "answer": "Z-axis"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a CNC lathe used for?",
    "options": ["Turning cylindrical parts", "Cutting flat surfaces", "Drilling square holes", "Welding metal"],
    "answer": "Turning cylindrical parts"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does CAD stand for in CNC machining?",
    "options": ["Computer-Aided Design", "Computer-Aided Drilling", "Centralized Automation Device", "Controlled Axis Design"],
    "answer": "Computer-Aided Design"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a toolpath in CNC machining?",
    "options": ["The route the cutting tool follows", "The storage area for tools", "The machine’s power source", "The operator’s manual"],
    "answer": "The route the cutting tool follows"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of coolant in CNC machining?",
    "options": ["To reduce heat and friction", "To power the machine", "To clean the workpiece", "To program the machine"],
    "answer": "To reduce heat and friction"
  },
  
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Harder metals are easier to cut than softer metals:",
    "options": ["True", "False"],
    "answer": "False"
  },
  
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "More power is required to cut hard materials vs soft materials:",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "The surface of ferrous metal castings has a scale that is more difficult to machine than the metal below:",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Steel bar stock is usually harder toward the outside than toward the center of the bar:",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Carbon tool steel is primarily used to make:",
    "options": ["Less expensive drills, taps, and reamers", "Single-point cutting tools"],
    "answer": "Less expensive drills, taps, and reamers"
  },
    {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "When selecting cutting conditions, the following order is appropriate:",
    "options": ["Depth of cut, Feed, Speed", "Speed, Depth of cut, Feed","Feed, Speed, Depth of Cut"],
    "answer": "Depth of cut, Feed, Speed"
  },
  
    {
    "section": "CNC Machining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "The cutting speed for turning a 4-inch diameter bar has been found to be 575 fpm.  Calculate the lathe spindle speed.",
    "options": ["245 rpm", "549 rpm", "712 rpm", "1021 rpm"],
    "answer": "549 rpm"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "You are seeing excessive flank wear - your tool life is too short.  Identify one incorrect remedy in the list below:",
    "options": ["Change to harder, more wear-resistant grade", "Reduce the cutting speed","Reduce the relief angle"],
    "answer": "Reduce the relief angle"
  },
  
    {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "G00 means:",
    "options": ["Machine zero position check","US Customary units of input","Cutting mode", "Rapid positioning"],
    "answer": "Rapid positioning"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "The difference between M00 and M05 is:",
    "options": ["M00 means program end, M05 means Automatic Tool Change (ATC)", "M00 means Program Stop, M05 means Spindle Stop"],
    "answer": "M00 means Program Stop, M05 means Spindle Stop"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "The offset to link the tool tip and part zero is the:",
    "options": ["Work offset", "Tool Length Offset", "Cutter Radius Offset"],
    "answer": "Tool Length Offset"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "The offset to link machine zero and part zero is the:",
    "options": ["Work offset", "Tool Length Offset", "Cutter Radius Offset"],
    "answer": "Work offset"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "The offset to link tool radius and drawing dimensions is this:",
    "options": ["Work offset", "Tool Length Offset", "Cutter Radius Offset"],
    "answer": "Cutter Radius Offset"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "After drilling a hole, why does the dwell period need to last at least two spindle revolutions?",
    "options": ["To polish", "To smooth out the bottom of the hole", "To burnish", "To hone"],
    "answer": "To smooth out the bottom of the hole"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "If the table on a vertical milling machine moves to the left, what direction has the cutter moved, relative to the workpiece?",
    "options": ["X negative", "Y positive", "X positive", "Z negative"],
    "answer": "X positive"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Rotary motion about the X axis is designated as:",
    "options": ["Hard", "Good", "A axis", "It's difficult to know"],
    "answer": "A axis"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Rotary motion about the Y axis is designated as:",
    "options": ["C Axis", "Unnecessary", "B axis", "Confusion"],
    "answer": "B axis"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Rotary motion about the Z axis is designated as:",
    "options": ["B Axis", "A axis", "C axis", "Contouring"],
    "answer": "C axis"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "The surface finish in turning increases with a bigger tool nose radius and decreases with feed:",
    "options": ["True, but the relationship is more complicated because tool geometry, the work material and cutting conditions can all have an influence","False, but the relationship is more complicated because tool geometry, the work material and cutting conditions can all have an influence"],
    "answer": "False"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining process?",
    "options": ["Drilling", "Painting", "Sewing", "Baking"],
    "answer": "Drilling"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a chuck used for in a CNC lathe?",
    "options": ["To hold the workpiece", "To cut the material", "To cool the machine", "To program the machine"],
    "answer": "To hold the workpiece"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the X-axis in CNC machining?",
    "options": ["Horizontal movement left to right", "Vertical movement", "Rotational movement", "Diagonal movement"],
    "answer": "Horizontal movement left to right"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common unit of measurement in CNC machining?",
    "options": ["Millimeters", "Liters", "Kilograms", "Watts"],
    "answer": "Millimeters"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a CNC router commonly used for?",
    "options": ["Cutting wood or composites", "Baking ceramics", "Printing paper", "Sewing fabric"],
    "answer": "Cutting wood or composites"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does a CNC machine use to follow instructions?",
    "options": ["Computer program", "Manual lever", "Hand crank", "Voice commands"],
    "answer": "Computer program"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common cutting tool material in CNC machining?",
    "options": ["Carbide", "Wood", "Plastic", "Rubber"],
    "answer": "Carbide"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a CNC controller?",
    "options": ["To interpret and execute G-code", "To design the workpiece", "To clean the machine", "To assemble parts"],
    "answer": "To interpret and execute G-code"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine component?",
    "options": ["Tool turret", "Paper feeder", "Ink cartridge", "Sewing needle"],
    "answer": "Tool turret"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a CNC plasma cutter used for?",
    "options": ["Cutting metal with plasma", "Drilling holes in wood", "Printing designs", "Welding plastic"],
    "answer": "Cutting metal with plasma"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the Y-axis in CNC machining?",
    "options": ["Horizontal movement front to back", "Vertical movement", "Rotational movement", "Diagonal movement"],
    "answer": "Horizontal movement front to back"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining operation?",
    "options": ["Turning", "Typing", "Scanning", "Baking"],
    "answer": "Turning"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a fixture in CNC machining?",
    "options": ["A device to hold the workpiece", "A type of cutting tool", "A cooling system", "A programming language"],
    "answer": "A device to hold the workpiece"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common power source for CNC machines?",
    "options": ["Electricity", "Steam", "Wind", "Solar"],
    "answer": "Electricity"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a CNC mill used for?",
    "options": ["Cutting flat or contoured surfaces", "Turning cylindrical parts", "Welding metal", "Printing paper"],
    "answer": "Cutting flat or contoured surfaces"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common coolant used in CNC machining?",
    "options": ["Water-based fluid", "Lemon extract", "Sugar syrup", "Olive oil"],
    "answer": "Water-based fluid"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a CNC program?",
    "options": ["A set of instructions for the machine", "A type of cutting tool", "A safety manual", "A machine part"],
    "answer": "A set of instructions for the machine"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine brand?",
    "options": ["Haas", "Sony", "Samsung", "Apple"],
    "answer": "Haas"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common inspection tool in CNC machining?",
    "options": ["Caliper", "Screwdriver", "Hammer", "Paintbrush"],
    "answer": "Caliper"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining material besides metal?",
    "options": ["Plastic", "Cloth", "Paper", "Ceramic"],
    "answer": "Plastic"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a tool changer in a CNC machine?",
    "options": ["A device to switch tools automatically", "A manual tool rack", "A cooling system", "A programming software"],
    "answer": "A device to switch tools automatically"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine maintenance task?",
    "options": ["Lubricating moving parts", "Repainting the machine", "Rewriting the software", "Redesigning the workpiece"],
    "answer": "Lubricating moving parts"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a CNC machine’s bed?",
    "options": ["The base that supports components", "The cutting tool", "The control panel", "The coolant tank"],
    "answer": "The base that supports components"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tolerance unit?",
    "options": ["Microns", "Liters", "Watts", "Kilograms"],
    "answer": "Microns"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a CNC machine’s control panel used for?",
    "options": ["To input commands and monitor operations", "To store tools", "To cool the machine", "To design parts"],
    "answer": "To input commands and monitor operations"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining application?",
    "options": ["Automotive parts", "Textile weaving", "Food processing", "Book printing"],
    "answer": "Automotive parts"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine sensor used for?",
    "options": ["Monitoring machine conditions", "Designing parts", "Cooling the machine", "Programming the machine"],
    "answer": "Monitoring machine conditions"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining finish?",
    "options": ["Polishing", "Embroidering", "Baking", "Coloring"],
    "answer": "Polishing"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine axis count for basic machines?",
    "options": ["3-axis", "1-axis", "7-axis", "10-axis"],
    "answer": "3-axis"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine safety feature?",
    "options": ["Emergency stop button", "Open design", "No guards", "Manual override only"],
    "answer": "Emergency stop button"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining industry?",
    "options": ["Aerospace", "Textile", "Publishing", "Agriculture"],
    "answer": "Aerospace"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine component for movement?",
    "options": ["Linear guide", "Paper roller", "Ink jet", "Fabric feeder"],
    "answer": "Linear guide"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool type?",
    "options": ["End mill", "Paintbrush", "Sewing needle", "Screwdriver"],
    "answer": "End mill"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine setup step?",
    "options": ["Securing the workpiece", "Writing a novel", "Cooking a meal", "Drawing a picture"],
    "answer": "Securing the workpiece"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine operation mode?",
    "options": ["Automatic", "Manual only", "Voice-activated", "Gesture-controlled"],
    "answer": "Automatic"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining process for holes?",
    "options": ["Drilling", "Welding", "Sewing", "Painting"],
    "answer": "Drilling"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine calibration tool?",
    "options": ["Dial indicator", "Ruler", "Thermometer", "Compass"],
    "answer": "Dial indicator"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining safety gear?",
    "options": ["Gloves", "Sandals", "Scarves", "Hats"],
    "answer": "Gloves"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine programming format?",
    "options": ["M-code", "HTML", "CSS", "Python"],
    "answer": "M-code"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine table type?",
    "options": ["T-slot table", "Glass table", "Wooden table", "Fabric table"],
    "answer": "T-slot table"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining operation for finishing?",
    "options": ["Grinding", "Typing", "Baking", "Sewing"],
    "answer": "Grinding"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine drive system?",
    "options": ["Servo motor", "Steam engine", "Wind turbine", "Manual crank"],
    "answer": "Servo motor"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool for threading?",
    "options": ["Tap", "Screwdriver", "Paintbrush", "Needle"],
    "answer": "Tap"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine enclosure purpose?",
    "options": ["To contain chips and coolant", "To amplify sound", "To store tools", "To display designs"],
    "answer": "To contain chips and coolant"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining material property to consider?",
    "options": ["Hardness", "Color", "Smell", "Taste"],
    "answer": "Hardness"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine feedback device?",
    "options": ["Encoder", "Speaker", "Microphone", "Camera"],
    "answer": "Encoder"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining operation for slots?",
    "options": ["Milling", "Welding", "Sewing", "Printing"],
    "answer": "Milling"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine lubrication type?",
    "options": ["Oil", "Water", "Syrup", "Paint"],
    "answer": "Oil"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool for boring?",
    "options": ["Boring bar", "Screwdriver", "Paintbrush", "Needle"],
    "answer": "Boring bar"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine chip removal method?",
    "options": ["Chip conveyor", "Vacuum cleaner", "Broom", "Fan"],
    "answer": "Chip conveyor"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining inspection method?",
    "options": ["Visual inspection", "Taste testing", "Smell checking", "Sound analysis"],
    "answer": "Visual inspection"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine programming interface?",
    "options": ["Conversational programming", "Voice recognition", "Gesture control", "Manual typing only"],
    "answer": "Conversational programming"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool coating?",
    "options": ["Titanium nitride", "Sugar coating", "Wax coating", "Paint coating"],
    "answer": "Titanium nitride"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine alignment tool?",
    "options": ["Level", "Ruler", "Thermometer", "Compass"],
    "answer": "Level"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining operation for contours?",
    "options": ["Profiling", "Welding", "Sewing", "Printing"],
    "answer": "Profiling"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine cooling system?",
    "options": ["Flood coolant", "Air conditioner", "Fan", "Ice pack"],
    "answer": "Flood coolant"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool for facing?",
    "options": ["Face mill", "Screwdriver", "Paintbrush", "Needle"],
    "answer": "Face mill"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining safety sign?",
    "options": ["Warning sign", "Exit sign", "No smoking sign", "Welcome sign"],
    "answer": "Warning sign"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool for chamfering?",
    "options": ["Chamfer mill", "Screwdriver", "Paintbrush", "Needle"],
    "answer": "Chamfer mill"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine workholding device?",
    "options": ["Collet", "Paper clip", "Tape", "Glue"],
    "answer": "Collet"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining operation for grooves?",
    "options": ["Grooving", "Welding", "Sewing", "Printing"],
    "answer": "Grooving"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine diagnostic tool?",
    "options": ["Error code reader", "Thermometer", "Ruler", "Compass"],
    "answer": "Error code reader"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool for reaming?",
    "options": ["Reamer", "Screwdriver", "Paintbrush", "Needle"],
    "answer": "Reamer"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine programming step?",
    "options": ["Setting tool offsets", "Writing a novel", "Cooking a meal", "Drawing a picture"],
    "answer": "Setting tool offsets"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool for countersinking?",
    "options": ["Countersink", "Screwdriver", "Paintbrush", "Needle"],
    "answer": "Countersink"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine material handling system?",
    "options": ["Pallet changer", "Paper feeder", "Ink jet", "Fabric roller"],
    "answer": "Pallet changer"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining operation for pockets?",
    "options": ["Pocketing", "Welding", "Sewing", "Printing"],
    "answer": "Pocketing"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine tool storage system?",
    "options": ["Tool magazine", "Paper tray", "Ink cartridge", "Fabric bin"],
    "answer": "Tool magazine"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool for engraving?",
    "options": ["Engraving tool", "Screwdriver", "Paintbrush", "Needle"],
    "answer": "Engraving tool"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine monitoring system?",
    "options": ["Tool wear sensor", "Paper counter", "Ink level sensor", "Fabric detector"],
    "answer": "Tool wear sensor"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining operation for threading?",
    "options": ["Thread milling", "Welding", "Sewing", "Printing"],
    "answer": "Thread milling"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine tool calibration method?",
    "options": ["Touch probe", "Ruler", "Thermometer", "Compass"],
    "answer": "Touch probe"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machining tool for spot drilling?",
    "options": ["Spot drill", "Screwdriver", "Paintbrush", "Needle"],
    "answer": "Spot drill"
  },
  {
    "section": "CNC Machining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common CNC machine safety guard type?",
    "options": ["Interlocked guard", "Open cover", "No guard", "Paper shield"],
    "answer": "Interlocked guard"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of velocity?",
    "options": ["The rate of change of position", "The rate of change of acceleration", "The force applied to an object", "The energy stored in motion"],
    "answer": "The rate of change of position"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "According to the Machinery's Handbook, what is the formula for the area of a circle with radius r?",
    "options": ["A = πr", "A = πr²", "A = 2πr", "A = πd"],
    "answer": "A = πr²"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the tendency of an object to resist changes in motion?",
    "options": ["Inertia", "Friction", "Momentum", "Torque"],
    "answer": "Inertia"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of work?",
    "options": ["Force applied over a distance", "Mass times velocity", "Energy stored in an object", "The rate of energy transfer"],
    "answer": "Force applied over a distance"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the rotational equivalent of mass?",
    "options": ["Moment of inertia", "Torque", "Angular velocity", "Friction"],
    "answer": "Moment of inertia"
  },

  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the maximum stress a material can withstand before failure?",
    "options": ["Ultimate strength", "Yield strength", "Fatigue strength", "Compressive strength"],
    "answer": "Ultimate strength"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the ability of a material to deform without breaking?",
    "options": ["Ductility", "Hardness", "Brittleness", "Elasticity"],
    "answer": "Ductility"
  },

  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the angular velocity of a shaft rotating at 1,200 RPM (in radians per second)?",
    "options": ["100.5 rad/s", "125.7 rad/s", "150.8 rad/s", "175.9 rad/s"],
    "answer": "125.7 rad/s"
  },
  

{
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the kinetic energy of an object with mass m and velocity v?",
    "options": ["KE = mv", "KE = (1/2)mv²", "KE = mv²", "KE = (1/2)mv"],
    "answer": "KE = (1/2)mv²"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the coefficient of friction for lubricated steel on steel?",
    "options": ["0.05-0.10", "0.10-0.15", "0.15-0.20", "0.20-0.25"],
    "answer": "0.05-0.10"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the potential energy of an object with mass m, height h, and gravitational acceleration g?",
    "options": ["PE = mgh", "PE = (1/2)mgh", "PE = mg/h", "PE = mh/g"],
    "answer": "PE = mgh"
  },



  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the power output of a system with a torque of 100 ft-lb and a rotational speed of 1,800 RPM?",
    "options": ["32.4 hp", "34.3 hp", "36.2 hp", "38.1 hp"],
    "answer": "34.3 hp"
  },
  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the centripetal force required to keep a 2-lb object moving in a circle of radius 3 ft at a speed of 10 ft/s?",
    "options": ["6.25 lb", "8.33 lb", "10.42 lb", "12.50 lb"],
    "answer": "8.33 lb"
  },
  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the impulse delivered by a 50-lb force acting for 0.2 seconds?",
    "options": ["8 lb-s", "10 lb-s", "12 lb-s", "14 lb-s"],
    "answer": "10 lb-s"
  },

  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the modulus of elasticity for steel (in psi)?",
    "options": ["20,000,000", "25,000,000", "30,000,000", "35,000,000"],
    "answer": "30,000,000"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum tensile stress in a circular rod with diameter 0.5 inches and axial load 5,000 lb?",
    "options": ["22,736 psi", "25,465 psi", "28,194 psi", "31,831 psi"],
    "answer": "25,465 psi"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of shear stress?",
    "options": ["Force per unit area parallel to the surface", "Force per unit area perpendicular to the surface", "Deformation per unit length", "Energy stored in a material"],
    "answer": "Force per unit area parallel to the surface"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical yield strength of AISI 1045 steel (in psi)?",
    "options": ["45,000", "60,000", "75,000", "90,000"],
    "answer": "75,000"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the deflection of a simply supported beam with length L, load P at the center, and moment of inertia I?",
    "options": ["δ = PL³/(48EI)", "δ = PL³/(24EI)", "δ = PL²/(12EI)", "δ = PL²/(6EI)"],
    "answer": "δ = PL³/(48EI)"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the Poisson’s ratio for steel?",
    "options": ["0.25-0.30", "0.30-0.35", "0.35-0.40", "0.40-0.45"],
    "answer": "0.30-0.35"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the torsional shear stress in a shaft with diameter 1 inch and torque 500 ft-lb?",
    "options": ["3,056 psi", "3,820 psi", "4,584 psi", "5,348 psi"],
    "answer": "3,820 psi"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the resistance of a material to surface indentation?",
    "options": ["Hardness", "Toughness", "Ductility", "Elasticity"],
    "answer": "Hardness"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical fatigue strength of AISI 4340 steel (in psi)?",
    "options": ["50,000", "60,000", "70,000", "80,000"],
    "answer": "70,000"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary characteristic of cast iron?",
    "options": ["High compressive strength", "High ductility", "Low density", "High corrosion resistance"],
    "answer": "High compressive strength"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical density of steel (in lb/in³)?",
    "options": ["0.250", "0.283", "0.300", "0.320"],
    "answer": "0.283"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the approximate specific heat capacity of aluminum (in Btu/lb-°F)?",
    "options": ["0.18", "0.22", "0.26", "0.30"],
    "answer": "0.22"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary constituent of bronze?",
    "options": ["Copper", "Iron", "Aluminum", "Zinc"],
    "answer": "Copper"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical hardness of AISI 4140 steel (quenched and tempered) (in Brinell)?",
    "options": ["200-220", "220-240", "240-260", "260-280"],
    "answer": "240-260"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the thermal conductivity of brass (in Btu/ft-hr-°F)?",
    "options": ["70", "85", "100", "115"],
    "answer": "85"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary advantage of titanium?",
    "options": ["High strength-to-weight ratio", "Low cost", "High thermal conductivity", "Ease of machining"],
    "answer": "High strength-to-weight ratio"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical melting point of brass (in °F)?",
    "options": ["1,600-1,700", "1,700-1,800", "1,800-1,900", "1,900-2,000"],
    "answer": "1,700-1,800"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the coefficient of thermal expansion for AISI 304 stainless steel (in in/in/°F × 10⁻⁶)?",
    "options": ["8.5", "9.6", "10.7", "11.8"],
    "answer": "9.6"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary characteristic of tool steel?",
    "options": ["High hardness and wear resistance", "High ductility", "Low density", "High corrosion resistance"],
    "answer": "High hardness and wear resistance"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical density of copper (in lb/in³)?",
    "options": ["0.283", "0.300", "0.323", "0.350"],
    "answer": "0.323"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a cap screw?",
    "options": ["To secure components with a threaded hole", "To align components", "To reduce friction", "To increase thread strength"],
    "answer": "To secure components with a threaded hole"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the pitch of a 1/2-13 UNC thread (in inches)?",
    "options": ["0.0625", "0.0769", "0.0833", "0.1000"],
    "answer": "0.0769"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tensile stress area of a 3/8-16 UNC thread (in square inches)?",
    "options": ["0.0678", "0.0775", "0.0872", "0.0969"],
    "answer": "0.0775"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a thread locker?",
    "options": ["To prevent loosening of threaded fasteners", "To increase thread strength", "To align components", "To reduce friction"],
    "answer": "To prevent loosening of threaded fasteners"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical tensile strength of a Grade 8 bolt (in psi)?",
    "options": ["120,000", "130,000", "150,000", "180,000"],
    "answer": "150,000"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the major diameter tolerance for a 3/4-10 UNC-2A external thread (in inches)?",
    "options": ["+0.000/-0.003", "+0.000/-0.004", "+0.000/-0.005", "+0.000/-0.006"],
    "answer": "+0.000/-0.004"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a cotter pin?",
    "options": ["To secure a fastener or shaft", "To align components", "To reduce friction", "To increase thread strength"],
    "answer": "To secure a fastener or shaft"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the thread angle for a Unified National thread (in degrees)?",
    "options": ["45", "55", "60", "75"],
    "answer": "60"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the pitch diameter tolerance for a 5/16-18 UNC-2B internal thread (in inches)?",
    "options": ["+0.0025/-0.000", "+0.0030/-0.000", "+0.0035/-0.000", "+0.0040/-0.000"],
    "answer": "+0.0030/-0.000"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a retaining ring?",
    "options": ["To secure components on a shaft or in a bore", "To align components", "To reduce friction", "To increase thread strength"],
    "answer": "To secure components on a shaft or in a bore"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical shear strength of a Grade 5 bolt (in psi)?",
    "options": ["60,000", "70,000", "80,000", "90,000"],
    "answer": "70,000"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary function of gears in a power transmission system, as described in *Machinery's Handbook*?",
    "options": ["To store energy", "To transmit power and motion between rotating shafts", "To reduce vibration", "To lubricate machinery"],
    "answer": "To transmit power and motion between rotating shafts"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the number of teeth per unit of diameter on a gear?",
    "options": ["Module", "Diametral Pitch", "Circular Pitch", "Addendum"],
    "answer": "Diametral Pitch"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which type of gear is commonly used to transmit power between parallel shafts?",
    "options": ["Bevel Gear", "Worm Gear", "Spur Gear", "Helical Gear"],
    "answer": "Spur Gear"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a gear train?",
    "options": ["To increase the weight of the system", "To connect multiple gears to achieve desired speed or torque", "To reduce the efficiency of power transmission", "To eliminate the need for lubrication"],
    "answer": "To connect multiple gears to achieve desired speed or torque"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the diametral pitch (P_d) of a gear, given the number of teeth (N) and pitch diameter (D)?",
    "options": ["P_d = N / D", "P_d = D / N", "P_d = N × D", "P_d = D × π / N"],
    "answer": "P_d = N / D"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the circular pitch of a gear, as defined in *Machinery's Handbook*?",
    "options": ["The diameter of the pitch circle", "The distance between corresponding points on adjacent teeth measured along the pitch circle", "The number of teeth per inch", "The thickness of the gear tooth"],
    "answer": "The distance between corresponding points on adjacent teeth measured along the pitch circle"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which gear type is used to transmit motion between non-parallel, non-intersecting shafts?",
    "options": ["Spur Gear", "Bevel Gear", "Worm Gear", "Helical Gear"],
    "answer": "Worm Gear"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the gear ratio (GR) of a simple gear train with driving gear teeth (N_1) and driven gear teeth (N_2)?",
    "options": ["GR = N_1 / N_2", "GR = N_2 / N_1", "GR = N_1 × N_2", "GR = N_2 - N_1"],
    "answer": "GR = N_2 / N_1"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the addendum of a gear, as per *Machinery's Handbook*?",
    "options": ["The distance from the pitch circle to the root circle", "The distance from the pitch circle to the outer circle", "The total depth of the gear tooth", "The width of the gear tooth"],
    "answer": "The distance from the pitch circle to the outer circle"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the primary advantage of helical gears over spur gears?",
    "options": ["Lower cost", "Smoother and quieter operation", "Higher load capacity", "Simpler manufacturing"],
    "answer": "Smoother and quieter operation"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the center distance (C) between two meshing spur gears with pitch diameters D_1 and D_2?",
    "options": ["C = (D_1 + D_2) / 2", "C = D_1 + D_2", "C = (D_1 × D_2) / 2", "C = D_1 / D_2"],
    "answer": "C = (D_1 + D_2) / 2"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "In a planetary gear system, what component is typically held stationary to achieve a specific gear ratio?",
    "options": ["Sun Gear", "Planet Carrier", "Ring Gear", "Planet Gears"],
    "answer": "Ring Gear"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the torque transmitted by a gear, given power (P) in horsepower and rotational speed (N) in RPM?",
    "options": ["T = (P × 63025) / N", "T = (P × N) / 63025", "T = P / (N × 63025)", "T = N / (P × 63025)"],
    "answer": "T = (P × 63025) / N"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "According to *Machinery's Handbook*, what is the standard pressure angle for most involute gear teeth in the United States?",
    "options": ["14.5 degrees", "20 degrees", "25 degrees", "30 degrees"],
    "answer": "20 degrees"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the purpose of backlash in a gear system?",
    "options": ["To increase gear strength", "To allow for thermal expansion and lubrication", "To reduce gear efficiency", "To eliminate gear meshing"],
    "answer": "To allow for thermal expansion and lubrication"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the pitch circle of a gear?",
    "options": ["The circle that defines the outer edge of the gear", "The circle where gear teeth theoretically roll without slipping", "The circle at the base of the gear teeth", "The circle defining the gear's root diameter"],
    "answer": "The circle where gear teeth theoretically roll without slipping"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which type of gear is used to transmit power between intersecting shafts?",
    "options": ["Spur Gear", "Helical Gear", "Bevel Gear", "Worm Gear"],
    "answer": "Bevel Gear"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the module (m) of a metric gear, given the pitch diameter (D) and number of teeth (N)?",
    "options": ["m = D / N", "m = N / D", "m = D × N", "m = D / (N × π)"],
    "answer": "m = D / N"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the primary disadvantage of worm gears compared to other gear types?",
    "options": ["High cost of manufacturing", "Lower efficiency due to sliding contact", "Limited load capacity", "Inability to transmit motion"],
    "answer": "Lower efficiency due to sliding contact"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does AGMA stand for in the context of gear standards, as referenced in *Machinery's Handbook*?",
    "options": ["American Gear Manufacturers Association", "Association for Gear Machinery Analysis", "American General Machine Alliance", "Automated Gear Manufacturing Assembly"],
    "answer": "American Gear Manufacturers Association"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a worm gear?",
    "options": ["To transmit motion at a right angle with high reduction", "To transmit motion between parallel shafts", "To increase speed", "To align components"],
    "answer": "To transmit motion at a right angle with high reduction"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the addendum of a gear with a diametral pitch of 10 (in inches)?",
    "options": ["0.080", "0.100", "0.120", "0.140"],
    "answer": "0.100"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the center distance for two spur gears with 24 and 48 teeth, each with a diametral pitch of 12 (in inches)?",
    "options": ["3.00", "3.50", "4.00", "4.50"],
    "answer": "3.50"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a chain drive?",
    "options": ["To transmit power between shafts", "To align components", "To reduce torque", "To increase speed"],
    "answer": "To transmit power between shafts"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the dedendum of a gear with a diametral pitch of 8 (in inches)?",
    "options": ["0.125", "0.157", "0.188", "0.219"],
    "answer": "0.157"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the output speed of a gear train with a 30-tooth driver gear rotating at 600 RPM and a 45-tooth driven gear?",
    "options": ["300 RPM", "400 RPM", "500 RPM", "600 RPM"],
    "answer": "400 RPM"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a coupling?",
    "options": ["To connect two shafts", "To reduce speed", "To increase torque", "To align gears"],
    "answer": "To connect two shafts"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical efficiency of a spur gear pair (in percent)?",
    "options": ["90-92", "92-94", "94-96", "96-98"],
    "answer": "96-98"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the circular pitch of a gear with a diametral pitch of 16 (in inches)?",
    "options": ["0.157", "0.196", "0.236", "0.275"],
    "answer": "0.196"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a pulley system?",
    "options": ["To transmit power or change speed", "To align components", "To reduce friction", "To increase torque"],
    "answer": "To transmit power or change speed"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical helix angle for a helical gear (in degrees)?",
    "options": ["10-15", "15-20", "20-25", "25-30"],
    "answer": "15-20"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a sleeve bearing?",
    "options": ["To support radial loads with sliding contact", "To support axial loads", "To align shafts", "To increase torque"],
    "answer": "To support radial loads with sliding contact"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical dynamic load rating factor for a tapered roller bearing?",
    "options": ["1.0-1.2", "1.2-1.4", "1.4-1.6", "1.6-1.8"],
    "answer": "1.4-1.6"
  },
  {
    "section": "Bearings",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the equivalent dynamic load for a ball bearing with a radial load of 800 lb and an axial load of 200 lb (using a thrust factor of 2)?",
    "options": ["960 lb", "1,000 lb", "1,040 lb", "1,080 lb"],
    "answer": "1,000 lb"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a bearing seal?",
    "options": ["To retain lubricant and exclude contaminants", "To increase load capacity", "To align shafts", "To reduce friction"],
    "answer": "To retain lubricant and exclude contaminants"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical operating temperature range for a grease-lubricated ball bearing (in °F)?",
    "options": ["-20 to 200", "0 to 250", "50 to 300", "100 to 350"],
    "answer": "0 to 250"
  },
  {
    "section": "Bearings",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the life expectancy of a roller bearing with a dynamic load rating of 5,000 lb and an applied load of 2,500 lb (in millions of revolutions)?",
    "options": ["4", "6", "8", "10"],
    "answer": "8"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a needle bearing?",
    "options": ["To support high radial loads in limited space", "To support axial loads", "To align shafts", "To increase torque"],
    "answer": "To support high radial loads in limited space"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical material for a ball bearing cage?",
    "options": ["Steel or brass", "Aluminum", "Plastic", "Ceramic"],
    "answer": "Steel or brass"
  },
  {
    "section": "Bearings",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the preload force for a precision ball bearing with a recommended preload of 0.05% of the dynamic load rating of 10,000 lb?",
    "options": ["3 lb", "4 lb", "5 lb", "6 lb"],
    "answer": "5 lb"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a bearing lubricant?",
    "options": ["To reduce friction and wear", "To increase load capacity", "To align shafts", "To transmit power"],
    "answer": "To reduce friction and wear"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical viscosity range for oil used in high-speed bearings (in centistokes at 40°C)?",
    "options": ["10-20", "20-30", "30-40", "40-50"],
    "answer": "20-30"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of forging?",
    "options": ["To shape metal by compressive forces", "To join metals", "To remove material", "To polish surfaces"],
    "answer": "To shape metal by compressive forces"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical temperature range for normalizing low-carbon steel (in °F)?",
    "options": ["1,400-1,600", "1,600-1,800", "1,800-2,000", "2,000-2,200"],
    "answer": "1,600-1,800"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical shrinkage allowance for aluminum in sand casting (in inches per foot)?",
    "options": ["0.125", "0.156", "0.188", "0.219"],
    "answer": "0.156"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of quenching?",
    "options": ["To harden steel by rapid cooling", "To soften steel", "To join metals", "To remove material"],
    "answer": "To harden steel by rapid cooling"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical surface finish achieved by investment casting (in microinches)?",
    "options": ["32-63", "63-125", "125-250", "250-500"],
    "answer": "63-125"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical ram pressure for a hydraulic press used in forging steel (in tons)?",
    "options": ["500-1,000", "1,000-2,000", "2,000-3,000", "3,000-4,000"],
    "answer": "1,000-2,000"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of tempering?",
    "options": ["To reduce brittleness in hardened steel", "To harden steel", "To join metals", "To remove material"],
    "answer": "To reduce brittleness in hardened steel"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical tolerance for die casting (in inches)?",
    "options": ["±0.001", "±0.002", "±0.005", "±0.010"],
    "answer": "±0.002"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical extrusion ratio for aluminum?",
    "options": ["10:1 to 20:1", "20:1 to 40:1", "40:1 to 60:1", "60:1 to 80:1"],
    "answer": "20:1 to 40:1"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of powder metallurgy?",
    "options": ["To form parts from metal powders", "To join metals", "To remove material", "To polish surfaces"],
    "answer": "To form parts from metal powders"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical sintering temperature for iron-based powders (in °F)?",
    "options": ["1,800-2,000", "2,000-2,200", "2,200-2,400", "2,400-2,600"],
    "answer": "2,000-2,200"
  },
{
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of gas metal arc welding (GMAW)?",
    "options": ["To join metals using a consumable wire electrode", "To cut metals", "To shape metals", "To polish surfaces"],
    "answer": "To join metals using a consumable wire electrode"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical shielding gas for welding aluminum using GMAW?",
    "options": ["Argon", "Carbon dioxide", "Nitrogen", "Oxygen"],
    "answer": "Argon"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the approximate heat input for a shielded metal arc welding (SMAW) process with a voltage of 22 V, current of 180 A, and travel speed of 12 in/min (in kJ/in)?",
    "options": ["17", "19", "21", "23"],
    "answer": "19.8"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of flux in welding?",
    "options": ["To protect the weld pool from contamination", "To increase weld strength", "To align components", "To reduce heat input"],
    "answer": "To protect the weld pool from contamination"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical welding current range for gas tungsten arc welding (GTAW) of stainless steel (in amperes)?",
    "options": ["50-100", "100-150", "150-200", "200-250"],
    "answer": "100-150"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical cooling rate for a post-weld heat treatment of AISI 4140 steel (in °F per hour)?",
    "options": ["50-100", "100-150", "150-200", "200-250"],
    "answer": "100-150"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of seam welding?",
    "options": ["To create continuous welds on sheet metal", "To cut sheet metal", "To shape sheet metal", "To polish surfaces"],
    "answer": "To create continuous welds on sheet metal"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical electrode diameter for shielded metal arc welding (SMAW) of carbon steel (in inches)?",
    "options": ["1/16-3/32", "3/32-1/8", "1/8-5/32", "5/32-3/16"],
    "answer": "1/8-5/32"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical weld imperfection tolerance for a butt weld in carbon steel (in inches)?",
    "options": ["0.01", "0.02", "0.03", "0.04"],
    "answer": "0.02"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a welding positioner?",
    "options": ["To hold and rotate workpieces for welding", "To cut materials", "To shape materials", "To measure weld quality"],
    "answer": "To hold and rotate workpieces for welding"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of acceleration?",
    "options": ["The rate of change of velocity", "The rate of change of position", "The force applied to an object", "The energy stored in motion"],
    "answer": "The rate of change of velocity"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the linear momentum of an object with mass m and velocity v?",
    "options": ["p = mv", "p = m/v", "p = mv²", "p = m/v²"],
    "answer": "p = mv"
  },
  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the angular acceleration of a shaft increasing from 600 RPM to 1,200 RPM in 10 seconds (in rad/s²)?",
    "options": ["6.28", "7.85", "9.42", "11.00"],
    "answer": "6.28"
  },
    {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of tensile strength, as per *Machinery's Handbook*?",
    "options": ["The ability of a material to resist bending", "The maximum stress a material can withstand before fracturing under tension", "The resistance to shear forces", "The ability to absorb impact energy"],
    "answer": "The maximum stress a material can withstand before fracturing under tension"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What type of stress is caused by forces acting parallel to the cross-sectional area of a material?",
    "options": ["Tensile stress", "Compressive stress", "Shear stress", "Bending stress"],
    "answer": "Shear stress"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which property describes a material's ability to deform plastically without fracturing?",
    "options": ["Hardness", "Ductility", "Brittleness", "Toughness"],
    "answer": "Ductility"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary characteristic of a brittle material?",
    "options": ["High elasticity", "Fractures with little plastic deformation", "High thermal conductivity", "High ductility"],
    "answer": "Fractures with little plastic deformation"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which metal is known for its high corrosion resistance and is commonly used in marine environments?",
    "options": ["Carbon Steel", "Stainless Steel", "Cast Iron", "Brass"],
    "answer": "Stainless Steel"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary component of most plastics, as noted in *Machinery's Handbook*?",
    "options": ["Ceramics", "Polymers", "Metals", "Composites"],
    "answer": "Polymers"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which material property measures resistance to surface indentation or scratching?",
    "options": ["Toughness", "Hardness", "Elasticity", "Ductility"],
    "answer": "Hardness"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does the term 'machinability' refer to in *Machinery's Handbook*?",
    "options": ["The ease with which a material can be cut or shaped", "The ability to resist wear", "The material's strength under tension", "The material's thermal conductivity"],
    "answer": "The ease with which a material can be cut or shaped"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which type of stress is caused by forces that tend to elongate a material?",
    "options": ["Compressive stress", "Tensile stress", "Shear stress", "Torsional stress"],
    "answer": "Tensile stress"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a common characteristic of aluminum alloys used in machining?",
    "options": ["High density", "Low strength", "Lightweight and good machinability", "Poor corrosion resistance"],
    "answer": "Lightweight and good machinability"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for engineering stress (σ), given force (F) and cross-sectional area (A)?",
    "options": ["σ = F / A", "σ = F × A", "σ = A / F", "σ = F^2 / A"],
    "answer": "σ = F / A"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which metal has excellent machinability and is often used for fittings and valves?",
    "options": ["Titanium", "Brass", "Stainless Steel", "Tool Steel"],
    "answer": "Brass"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the shear strength of a material, as described in *Machinery's Handbook*?",
    "options": ["The maximum stress a material can withstand before fracturing under tension", "The stress required to cause sliding along a plane", "The ability to resist bending", "The ability to absorb impact energy"],
    "answer": "The stress required to cause sliding along a plane"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the primary disadvantage of machining titanium alloys?",
    "options": ["High thermal conductivity", "Poor machinability due to low thermal conductivity and high strength", "Excessive ductility", "Low melting point"],
    "answer": "Poor machinability due to low thermal conductivity and high strength"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which plastic is known for its high strength and resistance to wear, often used for gears and bearings?",
    "options": ["Polyethylene", "Nylon", "PVC", "Polystyrene"],
    "answer": "Nylon"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for strain (ε), given change in length (ΔL) and original length (L_0)?",
    "options": ["ε = ΔL / L_0", "ε = L_0 / ΔL", "ε = ΔL × L_0", "ε = ΔL + L_0"],
    "answer": "ε = ΔL / L_0"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which material is characterized by high hardness but low toughness, making it brittle?",
    "options": ["Cast Iron", "Aluminum", "Copper", "Mild Steel"],
    "answer": "Cast Iron"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the modulus of elasticity, as defined in *Machinery's Handbook*?",
    "options": ["The ratio of stress to strain in the elastic region", "The maximum stress before fracture", "The ability to resist shear forces", "The energy absorbed during impact"],
    "answer": "The ratio of stress to strain in the elastic region"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which metal is often used in high-speed cutting tools due to its high hardness and wear resistance?",
    "options": ["Aluminum", "Tool Steel", "Copper", "Brass"],
    "answer": "Tool Steel"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the primary advantage of machining free-machining steels, such as AISI 1215?",
    "options": ["High corrosion resistance", "Improved chip formation and reduced tool wear", "High tensile strength", "Low cost"],
    "answer": "Improved chip formation and reduced tool wear"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the ultimate tensile strength (UTS) of a material, as used in *Machinery's Handbook*?",
    "options": ["UTS = Maximum force / Original cross-sectional area", "UTS = Maximum force × Cross-sectional area", "UTS = Force / Strain", "UTS = Stress / Strain"],
    "answer": "UTS = Maximum force / Original cross-sectional area"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the primary source of residual stress in machined parts, as per *Machinery's Handbook*?",
    "options": ["Uniform cooling", "Non-uniform plastic deformation or thermal gradients", "Material composition", "External loading"],
    "answer": "Non-uniform plastic deformation or thermal gradients"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Which plastic has excellent chemical resistance and is often used for piping and fittings?",
    "options": ["Polyethylene", "Polytetrafluoroethylene (PTFE)", "Polycarbonate", "Nylon"],
    "answer": "Polytetrafluoroethylene (PTFE)"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for shear stress (τ) in a cylindrical shaft under torsion, given torque (T), radius (r), and polar moment of inertia (J)?",
    "options": ["τ = T × r / J", "τ = T / (r × J)", "τ = J / (T × r)", "τ = T × J / r"],
    "answer": "τ = T × r / J"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Which material property is critical for determining a material's resistance to fatigue failure?",
    "options": ["Hardness", "Endurance limit", "Ductility", "Thermal conductivity"],
    "answer": "Endurance limit"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the primary challenge when machining high-temperature alloys like Inconel?",
    "options": ["Low strength", "Work hardening and high cutting forces", "Excessive ductility", "High thermal conductivity"],
    "answer": "Work hardening and high cutting forces"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which type of stress combines tensile and compressive stresses in a material under bending?",
    "options": ["Shear stress", "Bending stress", "Torsional stress", "Thermal stress"],
    "answer": "Bending stress"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is a key characteristic of polycarbonate plastics used in machining?",
    "options": ["High brittleness", "High impact strength and transparency", "Low melting point", "Poor machinability"],
    "answer": "High impact strength and transparency"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the maximum bending stress (σ) in a beam, given bending moment (M), distance from neutral axis (c), and moment of inertia (I)?",
    "options": ["σ = M × c / I", "σ = M / (c × I)", "σ = I / (M × c)", "σ = M × I / c"],
    "answer": "σ = M × c / I"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which metal is known for its high electrical conductivity and is commonly used in electrical components?",
    "options": ["Copper", "Titanium", "Stainless Steel", "Cast Iron"],
    "answer": "Copper"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does a blue-colored chip indicate when machining steel, as noted in *Machinery's Handbook*?",
    "options": ["Low cutting temperature", "Optimal cutting conditions", "High cutting temperature", "Incorrect feed rate"],
    "answer": "High cutting temperature"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What does the formation of continuous, stringy chips during machining of aluminum suggest?",
    "options": ["High cutting speed or ductile material", "Low cutting speed", "Excessive tool wear", "Incorrect tool geometry"],
    "answer": "High cutting speed or ductile material"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What do short, brittle chips indicate when machining cast iron?",
    "options": ["Poor lubrication", "High ductility", "Appropriate cutting conditions", "Excessive feed rate"],
    "answer": "Appropriate cutting conditions"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What does a dark purple or black chip color indicate when machining titanium alloys?",
    "options": ["Optimal cutting speed", "Excessive cutting temperature or insufficient cooling", "Low feed rate", "High tool sharpness"],
    "answer": "Excessive cutting temperature or insufficient cooling"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What type of chip formation is typical when machining plastics like polyethylene?",
    "options": ["Short, brittle chips", "Continuous, stringy chips", "Segmented chips", "No chip formation"],
    "answer": "Continuous, stringy chips"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does a silver or light-colored chip indicate when machining steel?",
    "options": ["High cutting temperature", "Optimal cutting conditions", "Excessive feed rate", "Poor tool material"],
    "answer": "Optimal cutting conditions"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the yield strength of a material, as defined in *Machinery's Handbook*?",
    "options": ["The stress at which plastic deformation begins", "The maximum stress before fracture", "The stress at which the material fails", "The stress at which elastic recovery occurs"],
    "answer": "The stress at which plastic deformation begins"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which metal is difficult to machine due to its tendency to gall and adhere to cutting tools?",
    "options": ["Aluminum", "Titanium", "Brass", "Copper"],
    "answer": "Titanium"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is a key advantage of machining acetal (Delrin) plastics?",
    "options": ["High thermal conductivity", "Excellent dimensional stability and low friction", "High brittleness", "Low strength"],
    "answer": "Excellent dimensional stability and low friction"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the primary factor affecting the machinability of a material, as per *Machinery's Handbook*?",
    "options": ["Material color", "Microstructure and hardness", "Thermal expansion", "Density"],
    "answer": "Microstructure and hardness"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which type of stress is caused by twisting forces applied to a material?",
    "options": ["Tensile stress", "Compressive stress", "Torsional stress", "Bending stress"],
    "answer": "Torsional stress"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the factor of safety (FS) in material design, given ultimate strength (σ_u) and allowable stress (σ_a)?",
    "options": ["FS = σ_u / σ_a", "FS = σ_a / σ_u", "FS = σ_u × σ_a", "FS = σ_u + σ_a"],
    "answer": "FS = σ_u / σ_a"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which material is known for its high strength-to-weight ratio and is commonly used in aerospace applications?",
    "options": ["Cast Iron", "Titanium", "Brass", "Mild Steel"],
    "answer": "Titanium"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is a key characteristic of low-carbon steel in terms of machinability?",
    "options": ["Poor machinability due to high hardness", "Good machinability but gummy chips", "High brittleness", "Low thermal conductivity"],
    "answer": "Good machinability but gummy chips"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the Poisson’s ratio (ν) of a material, as defined in *Machinery's Handbook*?",
    "options": ["The ratio of longitudinal strain to lateral strain", "The ratio of stress to strain", "The ratio of shear stress to shear strain", "The ratio of tensile strength to yield strength"],
    "answer": "The ratio of longitudinal strain to lateral strain"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which plastic is brittle and commonly used for low-cost, disposable items?",
    "options": ["Polycarbonate", "Polystyrene", "Nylon", "PTFE"],
    "answer": "Polystyrene"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What does the formation of segmented chips during machining of titanium indicate?",
    "options": ["Low cutting speed", "High cutting speed or shear-localized deformation", "Excessive lubrication", "Poor tool material"],
    "answer": "High cutting speed or shear-localized deformation"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which metal is commonly alloyed with steel to improve corrosion resistance?",
    "options": ["Chromium", "Aluminum", "Copper", "Titanium"],
    "answer": "Chromium"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the toughness of a material, as described in *Machinery's Handbook*?",
    "options": ["The area under the stress-strain curve up to fracture", "The maximum stress before fracture", "The ratio of stress to strain", "The energy absorbed during elastic deformation"],
    "answer": "The area under the stress-strain curve up to fracture"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is a common issue when machining thermoplastics like PVC?",
    "options": ["High thermal conductivity", "Melting or softening due to heat generation", "Excessive hardness", "Brittle chip formation"],
    "answer": "Melting or softening due to heat generation"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary advantage of using bronze in bearing applications?",
    "options": ["High strength", "Low friction and good wear resistance", "High thermal conductivity", "Low cost"],
    "answer": "Low friction and good wear resistance"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the ability of a material to return to its original shape after deformation?",
    "options": ["Elasticity", "Ductility", "Hardness", "Toughness"],
    "answer": "Elasticity"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical shear strength of AISI 1020 steel (in psi)?",
    "options": ["30,000", "40,000", "50,000", "60,000"],
    "answer": "40,000"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary characteristic of nickel alloys?",
    "options": ["High corrosion and heat resistance", "High ductility", "Low density", "High thermal conductivity"],
    "answer": "High corrosion and heat resistance"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical specific heat capacity of steel (in Btu/lb-°F)?",
    "options": ["0.10", "0.12", "0.14", "0.16"],
    "answer": "0.12"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a machine screw?",
    "options": ["To fasten components with threaded holes", "To align components", "To reduce friction", "To increase thread strength"],
    "answer": "To fasten components with threaded holes"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the pitch of a 5/8-11 UNC thread (in inches)?",
    "options": ["0.0833", "0.0909", "0.1000", "0.1111"],
    "answer": "0.0909"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a bevel gear?",
    "options": ["To transmit motion between intersecting shafts", "To transmit motion between parallel shafts", "To reduce speed", "To align components"],
    "answer": "To transmit motion between intersecting shafts"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the outside diameter of a spur gear with 40 teeth and a diametral pitch of 10 (in inches)?",
    "options": ["4.0", "4.2", "4.4", "4.6"],
    "answer": "4.2"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a spherical roller bearing?",
    "options": ["To accommodate misalignment and heavy loads", "To support axial loads", "To align shafts", "To increase torque"],
    "answer": "To accommodate misalignment and heavy loads"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical dynamic load rating factor for a needle roller bearing?",
    "options": ["1.0-1.2", "1.2-1.4", "1.4-1.6", "1.6-1.8"],
    "answer": "1.2-1.4"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of investment casting?",
    "options": ["To produce complex parts with high precision", "To join metals", "To remove material", "To polish surfaces"],
    "answer": "To produce complex parts with high precision"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical temperature range for stress-relieving carbon steel (in °F)?",
    "options": ["900-1,100", "1,100-1,300", "1,300-1,500", "1,500-1,700"],
    "answer": "1,100-1,300"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical mold temperature for injection molding of aluminum (in °F)?",
    "options": ["800-900", "900-1,000", "1,000-1,100", "1,100-1,200"],
    "answer": "900-1,000"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a forming die?",
    "options": ["To shape material without removing it", "To cut material", "To measure dimensions", "To align components"],
    "answer": "To shape material without removing it"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical material for a milling cutter?",
    "options": ["High-speed steel or carbide", "Aluminum", "Brass", "Plastic"],
    "answer": "High-speed steel or carbide"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical clearance angle for a shearing die for 0.05-inch thick aluminum (in degrees)?",
    "options": ["0.5-1.0", "1.0-1.5", "1.5-2.0", "2.0-2.5"],
    "answer": "1.0-1.5"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a drill bushing?",
    "options": ["To guide a drill bit", "To cut material", "To measure dimensions", "To polish surfaces"],
    "answer": "To guide a drill bit"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a jig?",
    "options": ["To guide tools and hold workpieces", "To measure dimensions", "To align components", "To polish surfaces"],
    "answer": "To guide tools and hold workpieces"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical material for a drill jig bushing?",
    "options": ["Hardened tool steel", "Aluminum", "Brass", "Plastic"],
    "answer": "Hardened tool steel"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical tolerance for a precision die set (in inches)?",
    "options": ["±0.0001", "±0.0002", "±0.0005", "±0.001"],
    "answer": "±0.0002"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a fixture?",
    "options": ["To hold workpieces during machining", "To cut material", "To measure dimensions", "To align shafts"],
    "answer": "To hold workpieces during machining"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical hardness of a tool steel die (in Rockwell C)?",
    "options": ["50-55", "55-60", "60-65", "65-70"],
    "answer": "60-65"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical clearance for a blanking die for 0.1-inch thick steel (in inches)?",
    "options": ["0.002", "0.004", "0.006", "0.008"],
    "answer": "0.004"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a punch?",
    "options": ["To cut or form material", "To measure dimensions", "To align components", "To polish surfaces"],
    "answer": "To cut or form material"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical surface finish required for a forming die (in microinches)?",
    "options": ["8-16", "16-32", "32-63", "63-125"],
    "answer": "16-32"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical shear angle for a progressive die (in degrees)?",
    "options": ["1-2", "2-3", "3-4", "4-5"],
    "answer": "2-3"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of gas tungsten arc welding (GTAW)?",
    "options": ["To join metals using a non-consumable electrode", "To cut metals", "To shape metals", "To polish surfaces"],
    "answer": "To join metals using a non-consumable electrode"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical welding current range for gas metal arc welding (GMAW) of aluminum (in amperes)?",
    "options": ["100-150", "150-200", "200-250", "250-300"],
    "answer": "150-200"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the approximate heat input for a TIG welding process with a voltage of 20 V, current of 150 A, and travel speed of 10 in/min (in kJ/in)?",
    "options": ["16", "18", "20", "22"],
    "answer": "18"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of adhesive bonding?",
    "options": ["To join materials using an adhesive", "To cut materials", "To shape materials", "To harden surfaces"],
    "answer": "To join materials using an adhesive"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical shear strength of an epoxy adhesive (in psi)?",
    "options": ["2,000-3,000", "3,000-4,000", "4,000-5,000", "5,000-6,000"],
    "answer": "3,000-4,000"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical preheat temperature for welding AISI 4130 steel (in °F)?",
    "options": ["300-400", "400-500", "500-600", "600-700"],
    "answer": "400-500"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of spot welding?",
    "options": ["To join sheet metal using localized heat", "To cut sheet metal", "To shape sheet metal", "To polish surfaces"],
    "answer": "To join sheet metal using localized heat"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical electrode force for spot welding 0.1-inch thick steel (in pounds)?",
    "options": ["800-1,000", "1,000-1,200", "1,200-1,400", "1,400-1,600"],
    "answer": "1,000-1,200"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical post-weld heat treatment temperature for stress relief of carbon steel (in °F)?",
    "options": ["900-1,000", "1,000-1,100", "1,100-1,200", "1,200-1,300"],
    "answer": "1,100-1,200"
  },
{
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the formula for the area of a triangle with base b and height h?",
    "options": ["A = bh", "A = (1/2)bh", "A = 2bh", "A = b + h"],
    "answer": "A = (1/2)bh"
  },
{
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the formula for the circumference of a circle with radius r?",
    "options": ["C = πr", "C = 2πr", "C = πr²", "C = 2πr²"],
    "answer": "C = 2πr"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the sine of 90 degrees trigonometric tables?",
    "options": ["0", "0.5", "0.707", "1.0"],
    "answer": "1.0"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the volume of a cone with radius r and height h?",
    "options": ["V = πr²h", "V = (1/2)πr²h", "V = (1/3)πr²h", "V = πrh"],
    "answer": "V = (1/3)πr²h"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 3/16 fraction tables?",
    "options": ["0.125", "0.1875", "0.25", "0.3125"],
    "answer": "0.1875"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Solve for x: 2x + 5 = 11",
    "options": ["2", "3", "4", "5"],
    "answer": "3"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the solution to the equation 3(x - 4) = 2x + 1?",
    "options": ["5", "7", "10", "13"],
    "answer": "13"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Solve the system of equations: 2x + y = 7 and x - 2y = 4",
    "options": ["(3, 1)", "(5, -3)", "(2, 3)", "(1, 5)"],
    "answer": "(3, 1)"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the sum of the interior angles of a triangle?",
    "options": ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
    "answer": "180 degrees"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the area of a circle with radius 5 cm?",
    "options": ["25π cm²", "10π cm²", "15π cm²", "20π cm²"],
    "answer": "25π cm²"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Find the volume of a cone with radius 3 cm and height 8 cm.",
    "options": ["24π cm³", "72π cm³", "18π cm³", "36π cm³"],
    "answer": "24π cm³"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the slope of the line y = 2x + 3?",
    "options": ["1", "2", "3", "0"],
    "answer": "2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the equation of a line passing through (2, 3) with slope 4?",
    "options": ["y = 4x - 5", "y = 4x + 3", "y = 4x - 2", "y = 4x + 5"],
    "answer": "y = 4x - 5"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the distance between points (1, 2, 3) and (4, 6, 7) in 3D space?",
    "options": ["√41", "√29", "√50", "√32"],
    "answer": "√41"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the area of a rectangle with length 6 cm and width 4 cm?",
    "options": ["10 cm²", "20 cm²", "24 cm²", "28 cm²"],
    "answer": "24 cm²"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "In a right triangle, if the opposite side is 5 and the hypotenuse is 13, what is sin(θ)?",
    "options": ["5/13", "12/13", "5/12", "13/5"],
    "answer": "5/13"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "In a right triangle with legs 6 and 8, what is tan(θ)?",
    "options": ["3/4", "4/3", "6/8", "8/6"],
    "answer": "3/4"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Convert 180 degrees to radians.",
    "options": ["π/2", "π", "2π", "π/4"],
    "answer": "π"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Convert π/3 radians to degrees.",
    "options": ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
    "answer": "60 degrees"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Given points (1, 2) and (3, 8), find the y-value at x = 2 using linear interpolation.",
    "options": ["4", "5", "6", "7"],
    "answer": "5"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is cos(0)?",
    "options": ["0", "1", "-1", "1/2"],
    "answer": "1"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is sin(π/6)?",
    "options": ["1/2", "√3/2", "1/√2", "0"],
    "answer": "1/2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Convert 100 cm to inches (1 cm ≈ 0.3937 inches).",
    "options": ["39.37 inches", "25.40 inches", "100 inches", "10 inches"],
    "answer": "39.37 inches"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Convert 2.5 km to miles (1 km ≈ 0.6214 miles).",
    "options": ["1.5535 miles", "1.2428 miles", "2.0000 miles", "0.6214 miles"],
    "answer": "1.5535 miles"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the value of tan(45°)?",
    "options": ["0", "1", "√2", "√3"],
    "answer": "1"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Solve for x in sin(x) = 0.5 for 0 ≤ x ≤ 2π.",
    "options": ["π/6, 5π/6", "π/3, 2π/3", "π/4, 3π/4", "π/2, 3π/2"],
    "answer": "π/6, 5π/6"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Convert 1/4 to a decimal.",
    "options": ["0.25", "0.5", "0.75", "0.2"],
    "answer": "0.25"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Convert 5/8 to a decimal.",
    "options": ["0.625", "0.58", "0.75", "0.875"],
    "answer": "0.625"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is -3 + 5?",
    "options": ["2", "-2", "8", "-8"],
    "answer": "2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is 15% of 200?",
    "options": ["20", "25", "30", "35"],
    "answer": "30"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "If a price increases from $80 to $100, what is the percentage increase?",
    "options": ["20%", "25%", "30%", "40%"],
    "answer": "25%"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the reciprocal of 4?",
    "options": ["1/4", "4", "1/2", "2"],
    "answer": "1/4"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is 17 - (-8)?",
    "options": ["9", "25", "-9", "-25"],
    "answer": "25"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is (24 ÷ 3) × (5 - 2)?",
    "options": ["16", "24", "32", "40"],
    "answer": "24"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the mean of the numbers 2, 4, 6, 8, 10?",
    "options": ["4", "5", "6", "7"],
    "answer": "6"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the cosine of 0 degrees?",
    "options": ["0", "0.5", "0.707", "1.0"],
    "answer": "1.0"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the value of log₁₀(1) logarithm tables?",
    "options": ["0", "1", "2", "3"],
    "answer": "0"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the value of 22², as referenced in the Machinery's Handbook exponent tables?",
    "options": ["464", "474", "484", "494"],
    "answer": "484"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the tangent of 0 degrees?",
    "options": ["0", "0.5", "1.0", "Undefined"],
    "answer": "0"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the surface area of a rectangular prism with dimensions l, w, and h?",
    "options": ["A = 2(lw + lh + wh)", "A = lw + lh + wh", "A = 4(lw + lh + wh)", "A = lwh"],
    "answer": "A = 2(lw + lh + wh)"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 5/16 fraction tables?",
    "options": ["0.25", "0.3125", "0.375", "0.4375"],
    "answer": "0.3125"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the secant of 0 degrees?",
    "options": ["0", "0.5", "1.0", "Undefined"],
    "answer": "1.0"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the moment of inertia of a hollow circular section about its diameter (where r₂ is outer radius and r₁ is inner radius)?",
    "options": ["I = π(r₂⁴ - r₁⁴)/4", "I = π(r₂⁴ - r₁⁴)/2", "I = π(r₂² - r₁²)/4", "I = π(r₂³ - r₁³)/4"],
    "answer": "I = π(r₂⁴ - r₁⁴)/4"
  },

  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Solve for x: 4x - 8 = 0",
    "options": ["1", "2", "3", "4"],
    "answer": "2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the value of x in the equation 5x + 3 = 2x + 12?",
    "options": ["2", "3", "4", "5"],
    "answer": "3"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Solve the system: 3x - 2y = 5 and x + y = 6",
    "options": ["(4, 2)", "(3, 3)", "(2, 4)", "(5, 1)"],
    "answer": "(4, 2)"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the perimeter of a square with side length 7 cm?",
    "options": ["14 cm", "21 cm", "28 cm", "35 cm"],
    "answer": "28 cm"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the area of a triangle with base 10 cm and height 8 cm?",
    "options": ["40 cm²", "48 cm²", "80 cm²", "24 cm²"],
    "answer": "40 cm²"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Find the surface area of a cylinder with radius 4 cm and height 10 cm.",
    "options": ["96π cm²", "112π cm²", "128π cm²", "160π cm²"],
    "answer": "112π cm²"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the y-intercept of the line y = 3x - 2?",
    "options": ["-2", "2", "3", "-3"],
    "answer": "-2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the equation of a line through points (1, 5) and (3, 9)?",
    "options": ["y = 2x + 3", "y = 3x + 2", "y = 2x + 5", "y = x + 4"],
    "answer": "y = 2x + 3"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the midpoint of the line segment joining (2, 3, 4) and (6, 7, 8)?",
    "options": ["(4, 5, 6)", "(3, 4, 5)", "(5, 6, 7)", "(2, 3, 4)"],
    "answer": "(4, 5, 6)"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the volume of a cube with side length 3 cm?",
    "options": ["9 cm³", "27 cm³", "18 cm³", "12 cm³"],
    "answer": "27 cm³"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "In a right triangle, if the adjacent side is 8 and the hypotenuse is 17, what is cos(θ)?",
    "options": ["8/17", "15/17", "8/15", "17/8"],
    "answer": "8/17"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "In a right triangle with legs 5 and 12, what is the length of the hypotenuse?",
    "options": ["13", "17", "15", "10"],
    "answer": "13"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Convert 90 degrees to radians.",
    "options": ["π/2", "π", "π/4", "2π"],
    "answer": "π/2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Convert 2π/3 radians to degrees.",
    "options": ["90 degrees", "120 degrees", "150 degrees", "180 degrees"],
    "answer": "120 degrees"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Using linear interpolation, find the y-value at x = 4 given points (2, 3) and (5, 9).",
    "options": ["5", "6", "7", "8"],
    "answer": "7"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is sin(π/2)?",
    "options": ["0", "1", "-1", "1/2"],
    "answer": "1"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is cos(π/3)?",
    "options": ["1/2", "√3/2", "1/√2", "0"],
    "answer": "1/2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Convert 1 meter to feet (1 m ≈ 3.2808 ft).",
    "options": ["2.54 ft", "3.28 ft", "1.00 ft", "5.00 ft"],
    "answer": "3.28 ft"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Convert 500 mL to fluid ounces (1 mL ≈ 0.0338 fl oz).",
    "options": ["15.90 fl oz", "16.90 fl oz", "17.90 fl oz", "18.90 fl oz"],
    "answer": "16.90 fl oz"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the value of cot(π/4)?",
    "options": ["0", "1", "√2", "√3"],
    "answer": "1"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Solve for x in cos(x) = -0.5 for 0 ≤ x ≤ 2π.",
    "options": ["π/3, 2π/3", "2π/3, 4π/3", "π/6, 5π/6", "π/2, 3π/2"],
    "answer": "2π/3, 4π/3"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Convert 3/5 to a decimal.",
    "options": ["0.3", "0.5", "0.6", "0.8"],
    "answer": "0.6"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Convert 7/20 to a decimal.",
    "options": ["0.35", "0.45", "0.55", "0.65"],
    "answer": "0.35"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is -7 + 10?",
    "options": ["3", "-3", "17", "-17"],
    "answer": "3"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is 20% of 150?",
    "options": ["20", "25", "30", "35"],
    "answer": "30"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "If a price decreases from $50 to $40, what is the percentage decrease?",
    "options": ["10%", "15%", "20%", "25%"],
    "answer": "20%"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the reciprocal of 5?",
    "options": ["1/5", "5", "1/2", "2"],
    "answer": "1/5"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is -12 + 15?",
    "options": ["3", "-3", "27", "-27"],
    "answer": "3"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is (15 ÷ 5) × (4 + 3)?",
    "options": ["12", "15", "21", "28"],
    "answer": "21"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the median of the numbers 3, 7, 1, 9, 5?",
    "options": ["3", "5", "7", "9"],
    "answer": "5"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a drilling machine?",
    "options": ["To create holes", "To produce flat surfaces", "To cut threads", "To shape gears"],
    "answer": "To create holes"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the recommended cutting speed for turning aluminum with a high-speed steel tool (in ft/min)?",
    "options": ["150-200", "200-250", "250-300", "300-350"],
    "answer": "250-300"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the spindle speed for milling a 1-inch diameter aluminum workpiece at a cutting speed of 400 ft/min?",
    "options": ["1222 RPM", "1528 RPM", "1833 RPM", "2139 RPM"],
    "answer": "1528 RPM"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a reaming operation?",
    "options": ["To finish and size holes", "To cut threads", "To create slots", "To polish surfaces"],
    "answer": "To finish and size holes"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical feed rate for milling aluminum with a carbide cutter (in inches per tooth)?",
    "options": ["0.004-0.006", "0.006-0.008", "0.008-0.010", "0.010-0.012"],
    "answer": "0.008-0.010"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the material removal rate for a milling operation with a width of cut of 1.5 inches, depth of cut of 0.06 inches, and feed rate of 16 inches/min?",
    "options": ["1.08 in³/min", "1.44 in³/min", "1.80 in³/min", "2.16 in³/min"],
    "answer": "1.44 in³/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a tapping operation?",
    "options": ["To create internal threads", "To cut slots", "To drill holes", "To polish surfaces"],
    "answer": "To create internal threads"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical rake angle for a carbide tool cutting aluminum?",
    "options": ["5-10 degrees", "10-15 degrees", "15-20 degrees", "20-25 degrees"],
    "answer": "10-15 degrees"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the feed rate for a 4-flute end mill cutting stainless steel at a chip load of 0.003 inches/tooth and 1,200 RPM?",
    "options": ["12.0 inches/min", "14.4 inches/min", "16.8 inches/min", "19.2 inches/min"],
    "answer": "14.4 inches/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a counterboring operation?",
    "options": ["To create a flat-bottomed hole", "To cut threads", "To drill holes", "To polish surfaces"],
    "answer": "To create a flat-bottomed hole"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical cutting speed for grinding aluminum with a vitrified wheel (in ft/min)?",
    "options": ["4,000-5,000", "5,000-6,000", "6,000-7,000", "7,000-8,000"],
    "answer": "5,000-6,000"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the power required for a turning operation with a material removal rate of 1.6 in³/min and a specific cutting energy of 1.2 hp/in³/min?",
    "options": ["1.80 hp", "1.92 hp", "2.04 hp", "2.16 hp"],
    "answer": "1.92 hp"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a micrometer?",
    "options": ["To measure small dimensions with high precision", "To check surface finish", "To measure angles", "To align components"],
    "answer": "To measure small dimensions with high precision"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital angle gauge?",
    "options": ["0.01 degrees", "0.05 degrees", "0.1 degrees", "0.5 degrees"],
    "answer": "0.1 degrees"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class FN5 fit with a nominal diameter of 1.5 inches (in inches)?",
    "options": ["+0.0024/-0.0000", "+0.0028/-0.0000", "+0.0032/-0.0000", "+0.0036/-0.0000"],
    "answer": "+0.0028/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a surface plate?",
    "options": ["To provide a flat reference surface", "To measure angles", "To check thread pitch", "To align shafts"],
    "answer": "To provide a flat reference surface"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical accuracy of a digital height gauge (in inches)?",
    "options": ["0.0001", "0.0005", "0.001", "0.005"],
    "answer": "0.0005"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum permissible error for a Grade B surface plate (in inches)?",
    "options": ["0.0001", "0.0002", "0.0005", "0.001"],
    "answer": "0.0002"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a plug gauge?",
    "options": ["To check hole dimensions", "To measure surface finish", "To check thread pitch", "To align components"],
    "answer": "To check hole dimensions"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical accuracy of a coordinate measuring machine (CMM) (in inches)?",
    "options": ["0.00001", "0.0001", "0.001", "0.01"],
    "answer": "0.0001"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class LC6 fit with a nominal diameter of 2 inches (in inches)?",
    "options": ["+0.0024/-0.0000", "+0.0028/-0.0000", "+0.0032/-0.0000", "+0.0036/-0.0000"],
    "answer": "+0.0028/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a sine bar?",
    "options": ["To measure or set precise angles", "To check surface roughness", "To measure hole depth", "To align components"],
    "answer": "To measure or set precise angles"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital depth micrometer?",
    "options": ["0.00005 inches", "0.0001 inches", "0.0005 inches", "0.001 inches"],
    "answer": "0.0001 inches"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum permissible error for a precision straightedge (in inches over 12 inches)?",
    "options": ["0.0001", "0.0002", "0.0005", "0.001"],
    "answer": "0.0002"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary constituent of carbon steel?",
    "options": ["Iron", "Aluminum", "Copper", "Nickel"],
    "answer": "Iron"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical density of aluminum (in lb/in³)?",
    "options": ["0.080", "0.098", "0.120", "0.150"],
    "answer": "0.098"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the approximate thermal conductivity of AISI 304 stainless steel (in Btu/ft-hr-°F)?",
    "options": ["8.0", "9.4", "10.8", "12.2"],
    "answer": "9.4"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary characteristic of brass?",
    "options": ["Corrosion resistance and machinability", "High strength", "High thermal conductivity", "Low density"],
    "answer": "Corrosion resistance and machinability"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical hardness of annealed AISI 1020 steel (in Brinell)?",
    "options": ["100-120", "120-140", "140-160", "160-180"],
    "answer": "120-140"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the coefficient of thermal expansion for copper (in in/in/°F × 10⁻⁶)?",
    "options": ["8.5", "9.4", "10.3", "11.2"],
    "answer": "9.4"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a ball bearing?",
    "options": ["To reduce friction between rotating parts", "To increase torque", "To align shafts", "To transmit power"],
    "answer": "To reduce friction between rotating parts"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical dynamic load rating factor for a radial ball bearing?",
    "options": ["0.5-0.7", "0.7-0.9", "1.0-1.2", "1.2-1.4"],
    "answer": "1.0-1.2"
  },
  {
    "section": "Bearings",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the basic dynamic load rating for a ball bearing with a life of 1 million revolutions and an applied load of 1,000 lb?",
    "options": ["1,500 lb", "2,000 lb", "2,500 lb", "3,000 lb"],
    "answer": "2,000 lb"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a thrust bearing?",
    "options": ["To support axial loads", "To support radial loads", "To reduce torque", "To align components"],
    "answer": "To support axial loads"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical lubricant for a high-speed ball bearing?",
    "options": ["Grease", "Oil", "Solid lubricant", "Water-based lubricant"],
    "answer": "Oil"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of arc welding?",
    "options": ["To join metals using an electric arc", "To cut metals", "To shape metals", "To polish surfaces"],
    "answer": "To join metals using an electric arc"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical welding current range for shielded metal arc welding (SMAW) of steel (in amperes)?",
    "options": ["50-100", "100-200", "200-300", "300-400"],
    "answer": "100-200"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the approximate heat input for a MIG welding process with a voltage of 25 V, current of 200 A, and travel speed of 15 in/min (in kJ/in)?",
    "options": ["18", "20", "22", "24"],
    "answer": "20"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of brazing?",
    "options": ["To join metals using a filler metal", "To cut metals", "To shape metals", "To harden surfaces"],
    "answer": "To join metals using a filler metal"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical melting temperature range for a silver-based brazing alloy (in °F)?",
    "options": ["1,000-1,200", "1,200-1,400", "1,400-1,600", "1,600-1,800"],
    "answer": "1,200-1,400"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of torque?",
    "options": ["A rotational force", "A linear force", "The rate of change of velocity", "The resistance to motion"],
    "answer": "A rotational force"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for power in a rotational system (where T is torque in ft-lb and N is RPM)?",
    "options": ["P = TN/5252", "P = TN/33000", "P = TN/746", "P = TN/1000"],
    "answer": "P = TN/5252"
  },
  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the kinetic energy of a 10-lb object moving at 20 ft/s?",
    "options": ["62.5 ft-lb", "125 ft-lb", "200 ft-lb", "250 ft-lb"],
    "answer": "125 ft-lb"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of strain?",
    "options": ["Deformation per unit length", "Force per unit area", "Energy stored in a material", "Resistance to deformation"],
    "answer": "Deformation per unit length"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical ultimate tensile strength of AISI 4140 steel (in psi)?",
    "options": ["90,000", "110,000", "130,000", "150,000"],
    "answer": "130,000"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum bending stress in a rectangular beam with width b, height h, and moment M?",
    "options": ["σ = Mc/I, where c = h/2, I = bh³/12", "σ = Mh/(bh³)", "σ = Mb/(bh²)", "σ = M/(bh)"],
    "answer": "σ = Mc/I, where c = h/2, I = bh³/12"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a set screw?",
    "options": ["To secure an object without using a nut", "To join two plates", "To align components", "To reduce friction"],
    "answer": "To secure an object without using a nut"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the pitch of a 3/8-16 UNC thread (in inches)?",
    "options": ["0.050", "0.0625", "0.075", "0.100"],
    "answer": "0.0625"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the minor diameter tolerance for a 1/4-20 UNC-2B internal thread (in inches)?",
    "options": ["+0.002/-0.000", "+0.003/-0.000", "+0.004/-0.000", "+0.005/-0.000"],
    "answer": "+0.003/-0.000"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a helical gear?",
    "options": ["To transmit motion between parallel or non-parallel shafts", "To transmit motion at a right angle", "To reduce speed", "To align components"],
    "answer": "To transmit motion between parallel or non-parallel shafts"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the pitch diameter of a spur gear with 36 teeth and a diametral pitch of 12?",
    "options": ["2.5 inches", "3.0 inches", "3.5 inches", "4.0 inches"],
    "answer": "3.0 inches"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the velocity ratio of a gear train with a 20-tooth driver gear and a 40-tooth driven gear?",
    "options": ["0.5:1", "1:1", "2:1", "3:1"],
    "answer": "0.5:1"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of extrusion?",
    "options": ["To shape metal by forcing it through a die", "To join metals", "To remove material", "To harden surfaces"],
    "answer": "To shape metal by forcing it through a die"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical temperature range for annealing low-carbon steel (in °F)?",
    "options": ["1,200-1,400", "1,400-1,600", "1,600-1,800", "1,800-2,000"],
    "answer": "1,400-1,600"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical draft angle for sand casting (in degrees)?",
    "options": ["1-2", "2-3", "3-4", "4-5"],
    "answer": "2-3"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a die?",
    "options": ["To cut or shape material", "To measure dimensions", "To align components", "To polish surfaces"],
    "answer": "To cut or shape material"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical material for a cutting die?",
    "options": ["Aluminum", "Hardened tool steel", "Brass", "Plastic"],
    "answer": "Hardened tool steel"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical tolerance for a precision punch (in inches)?",
    "options": ["±0.0001", "±0.0002", "±0.0005", "±0.001"],
    "answer": "±0.0001"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary characteristic of stainless steel?",
    "options": ["Corrosion resistance", "High strength", "Low density", "High thermal conductivity"],
    "answer": "Corrosion resistance"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical melting point of AISI 1020 steel (in °F)?",
    "options": ["2,600-2,700", "2,700-2,800", "2,800-2,900", "2,900-3,000"],
    "answer": "2,700-2,800"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a roller bearing?",
    "options": ["To support heavy radial loads", "To support axial loads", "To align shafts", "To increase torque"],
    "answer": "To support heavy radial loads"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical clearance range for a cylindrical roller bearing (in inches)?",
    "options": ["0.0001-0.0005", "0.0005-0.0010", "0.0010-0.0015", "0.0015-0.0020"],
    "answer": "0.0005-0.0010"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of soldering?",
    "options": ["To join metals using a low-melting-point filler", "To cut metals", "To shape metals", "To harden surfaces"],
    "answer": "To join metals using a low-melting-point filler"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical melting temperature range for a tin-lead solder (in °F)?",
    "options": ["300-400", "400-500", "500-600", "600-700"],
    "answer": "400-500"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of momentum?",
    "options": ["Mass times velocity", "Force times distance", "Mass times acceleration", "Energy stored in motion"],
    "answer": "Mass times velocity"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the ability of a material to absorb energy without fracturing?",
    "options": ["Toughness", "Hardness", "Brittleness", "Elasticity"],
    "answer": "Toughness"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a washer?",
    "options": ["To distribute load and prevent damage", "To increase thread strength", "To align components", "To reduce friction"],
    "answer": "To distribute load and prevent damage"
  },
      {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary function of a fastener, as described in *Machinery's Handbook*?",
    "options": ["To permanently weld components together", "To join or secure two or more parts together", "To increase the aesthetic appeal of a component", "To reduce the weight of an assembly"],
    "answer": "To join or secure two or more parts together"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which type of fastener is typically used with a nut to secure components?",
    "options": ["Screw", "Bolt", "Rivet", "Pin"],
    "answer": "Bolt"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "According to *Machinery's Handbook*, what does the term 'thread pitch' refer to in the context of screw threads?",
    "options": ["The diameter of the thread", "The distance between threads, measured parallel to the thread axis", "The angle of the thread profile", "The length of the threaded portion"],
    "answer": "The distance between threads, measured parallel to the thread axis"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the standard thread form used for most inch-based fasteners in the United States, as per *Machinery's Handbook*?",
    "options": ["Metric thread", "Unified National (UN) thread", "Whitworth thread", "Acme thread"],
    "answer": "Unified National (UN) thread"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the purpose of a lock washer in a bolted joint?",
    "options": ["To increase the strength of the bolt", "To prevent the bolt or nut from loosening under vibration", "To reduce the weight of the assembly", "To act as a spacer between components"],
    "answer": "To prevent the bolt or nut from loosening under vibration"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "According to *Machinery's Handbook*, what is the formula for the tensile stress area (A_t) of a Unified National Coarse (UNC) thread, given the nominal diameter (D) and threads per inch (n)?",
    "options": ["A_t = 0.7854 × (D - 0.9743/n)^2", "A_t = 0.7854 × D^2", "A_t = 0.9743 × (D/n)", "A_t = D × n / 0.7854"],
    "answer": "A_t = 0.7854 × (D - 0.9743/n)^2"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the significance of the grade marking on a bolt head, such as three radial lines for a Grade 5 bolt?",
    "options": ["It indicates the bolt's length", "It specifies the bolt's material and strength properties", "It denotes the thread pitch", "It indicates the manufacturer"],
    "answer": "It specifies the bolt's material and strength properties"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "In *Machinery's Handbook*, what is the recommended torque calculation for a bolt, given the bolt's proof load (P) and a torque coefficient (K)?",
    "options": ["T = K × P × D", "T = P / (K × D)", "T = K × P / D", "T = P × D / K"],
    "answer": "T = K × P × D"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which type of fastener is designed to be permanent and typically deformed during installation?",
    "options": ["Bolt", "Screw", "Rivet", "Stud"],
    "answer": "Rivet"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does the designation 'M10 × 1.5' indicate for a metric fastener?",
    "options": ["10 mm diameter with 1.5 mm thread pitch", "10 mm length with 1.5 mm diameter", "10 mm thread pitch with 1.5 mm diameter", "10 mm head size with 1.5 mm length"],
    "answer": "10 mm diameter with 1.5 mm thread pitch"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a belt drive?",
    "options": ["To transmit power between shafts", "To align components", "To reduce torque", "To increase speed"],
    "answer": "To transmit power between shafts"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of heat treatment?",
    "options": ["To alter material properties", "To join metals", "To remove material", "To polish surfaces"],
    "answer": "To alter material properties"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a jig bushing?",
    "options": ["To guide a drill or tool", "To measure dimensions", "To align components", "To polish surfaces"],
    "answer": "To guide a drill or tool"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the tangent of 30 degrees, as listed in the Machinery's Handbook trigonometric tables?",
    "options": ["0.577", "0.707", "1.0", "1.732"],
    "answer": "0.577"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the surface area of a sphere with radius r?",
    "options": ["A = πr²", "A = 2πr²", "A = 4πr²", "A = (4/3)πr²"],
    "answer": "A = 4πr²"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 7/16 fraction tables?",
    "options": ["0.375", "0.4375", "0.5", "0.5625"],
    "answer": "0.4375"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the sine of 45 degrees, as provided in the Machinery's Handbook?",
    "options": ["0.5", "0.707", "0.866", "1.0"],
    "answer": "0.707"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the value of log₁₀(100) logarithm tables?",
    "options": ["1", "2", "3", "4"],
    "answer": "2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the value of 10², as referenced in the Machinery's Handbook exponent tables?",
    "options": ["80", "90", "100", "110"],
    "answer": "100"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the perimeter of a regular pentagon with side s?",
    "options": ["P = 3s", "P = 4s", "P = 5s", "P = 6s"],
    "answer": "P = 5s"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the moment of inertia of a triangle about its base (where b is base and h is height)?",
    "options": ["I = bh³/12", "I = bh³/36", "I = bh³/3", "I = bh/12"],
    "answer": "I = bh³/12"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 15/16 fraction tables?",
    "options": ["0.8125", "0.875", "0.9375", "1.0"],
    "answer": "0.9375"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the secant of 45 degrees?",
    "options": ["0.707", "1.0", "1.414", "2.0"],
    "answer": "1.414"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the volume of a regular pyramid with a square base of side s and height h?",
    "options": ["V = s²h", "V = (1/2)s²h", "V = (1/3)s²h", "V = s²h/4"],
    "answer": "V = (1/3)s²h"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the value of 11², as referenced in the Machinery's Handbook exponent tables?",
    "options": ["111", "121", "131", "141"],
    "answer": "121"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the cotangent of 45 degrees?",
    "options": ["0.577", "0.707", "1.0", "1.414"],
    "answer": "1.0"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the arc length of a circle sector with radius r and angle θ in radians?",
    "options": ["L = rθ", "L = πrθ/180", "L = 2πrθ/360", "L = rθ/π"],
    "answer": "L = rθ"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 1/32 fraction tables?",
    "options": ["0.03125", "0.0625", "0.125", "0.25"],
    "answer": "0.03125"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the cosine of 60 degrees, as listed in the Machinery's Handbook?",
    "options": ["0.5", "0.707", "0.866", "1.0"],
    "answer": "0.5"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the sum of the interior angles of an octagon, as provided in the Machinery's Handbook?",
    "options": ["900 degrees", "1080 degrees", "1260 degrees", "1440 degrees"],
    "answer": "1080 degrees"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the value of 12², as referenced in the Machinery's Handbook exponent tables?",
    "options": ["124", "134", "144", "154"],
    "answer": "144"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the area of a trapezoid with bases a and b and height h?",
    "options": ["A = (a + b)h", "A = (1/2)(a + b)h", "A = (a + b)/h", "A = ah + bh"],
    "answer": "A = (1/2)(a + b)h"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the value of log₁₀(0.1) logarithm tables?",
    "options": ["-1", "-2", "-3", "-4"],
    "answer": "-1"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 3/32 fraction tables?",
    "options": ["0.0625", "0.09375", "0.125", "0.1875"],
    "answer": "0.09375"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the cosecant of 60 degrees?",
    "options": ["0.577", "1.155", "1.732", "2.0"],
    "answer": "1.155"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the moment of inertia of a rectangular section about an axis through its base (where b is base and h is height)?",
    "options": ["I = bh³/12", "I = bh³/3", "I = bh³/36", "I = bh/3"],
    "answer": "I = bh³/3"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the value of 13², as referenced in the Machinery's Handbook exponent tables?",
    "options": ["149", "159", "169", "179"],
    "answer": "169"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the perimeter of a regular nonagon with side s?",
    "options": ["P = 7s", "P = 8s", "P = 9s", "P = 10s"],
    "answer": "P = 9s"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the volume of a hollow sphere with outer radius r₂ and inner radius r₁?",
    "options": ["V = (4/3)π(r₂³ - r₁³)", "V = (4/3)π(r₂² - r₁²)", "V = π(r₂³ - r₁³)", "V = (4/3)π(r₂ - r₁)³"],
    "answer": "V = (4/3)π(r₂³ - r₁³)"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 5/32 fraction tables?",
    "options": ["0.125", "0.15625", "0.1875", "0.21875"],
    "answer": "0.15625"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the tangent of 60 degrees, as listed in the Machinery's Handbook?",
    "options": ["0.577", "1.0", "1.732", "2.0"],
    "answer": "1.732"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the centroid of a triangle with respect to its base (distance from the base)?",
    "options": ["h/2", "h/3", "2h/3", "h/4"],
    "answer": "h/3"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a lathe?",
    "options": ["To produce cylindrical or conical surfaces", "To create flat surfaces", "To drill holes", "To polish surfaces"],
    "answer": "To produce cylindrical or conical surfaces"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the recommended cutting speed for turning brass with a high-speed steel tool (in ft/min)?",
    "options": ["100-150", "150-200", "200-250", "250-300"],
    "answer": "150-200"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the spindle speed for milling a 1.5-inch diameter cast iron workpiece at a cutting speed of 90 ft/min?",
    "options": ["229 RPM", "286 RPM", "344 RPM", "382 RPM"],
    "answer": "229 RPM"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a tapping operation?",
    "options": ["To create internal threads", "To cut slots", "To drill holes", "To polish surfaces"],
    "answer": "To create internal threads"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical feed rate for drilling steel with a 1/4-inch drill (in inches per revolution)?",
    "options": ["0.002-0.004", "0.004-0.006", "0.006-0.008", "0.008-0.010"],
    "answer": "0.004-0.006"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the material removal rate for a turning operation with a depth of cut of 0.1 inches, feed rate of 0.010 inches/rev, and spindle speed of 500 RPM?",
    "options": ["0.50 in³/min", "0.60 in³/min", "0.75 in³/min", "1.00 in³/min"],
    "answer": "0.50 in³/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a reaming operation?",
    "options": ["To finish and size holes", "To cut threads", "To create slots", "To polish surfaces"],
    "answer": "To finish and size holes"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical rake angle for a high-speed steel tool cutting aluminum?",
    "options": ["5-10 degrees", "10-15 degrees", "15-20 degrees", "20-25 degrees"],
    "answer": "10-15 degrees"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the feed rate for a 3-flute end mill cutting aluminum at a chip load of 0.003 inches/tooth and 2,400 RPM?",
    "options": ["18.0 inches/min", "21.6 inches/min", "25.2 inches/min", "28.8 inches/min"],
    "answer": "21.6 inches/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a counterboring operation?",
    "options": ["To create a flat-bottomed hole", "To cut threads", "To drill holes", "To polish surfaces"],
    "answer": "To create a flat-bottomed hole"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical cutting speed for milling stainless steel with a carbide cutter (in ft/min)?",
    "options": ["100-150", "150-200", "200-250", "250-300"],
    "answer": "150-200"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the chip load for a 4-flute end mill cutting steel at a feed rate of 12 inches/min and 1,500 RPM?",
    "options": ["0.0015 inches/tooth", "0.0020 inches/tooth", "0.0025 inches/tooth", "0.0030 inches/tooth"],
    "answer": "0.0020 inches/tooth"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a knurling operation?",
    "options": ["To create a textured surface", "To cut threads", "To drill holes", "To remove material"],
    "answer": "To create a textured surface"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical surface finish achieved by turning with a carbide tool (in microinches)?",
    "options": ["16-32", "32-63", "63-125", "125-250"],
    "answer": "32-63"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the power required for a milling operation with a material removal rate of 1.8 in³/min and a specific cutting energy of 1.2 hp/in³/min?",
    "options": ["1.8 hp", "2.0 hp", "2.16 hp", "2.4 hp"],
    "answer": "2.16 hp"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a chamfering operation?",
    "options": ["To create a beveled edge", "To cut threads", "To drill holes", "To remove chips"],
    "answer": "To create a beveled edge"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical feed rate for turning stainless steel with a carbide tool (in inches per revolution)?",
    "options": ["0.005-0.010", "0.010-0.015", "0.015-0.020", "0.020-0.025"],
    "answer": "0.005-0.010"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the spindle speed for drilling a 1/4-inch hole in brass at a cutting speed of 150 ft/min?",
    "options": ["573 RPM", "716 RPM", "859 RPM", "1146 RPM"],
    "answer": "2292 RPM"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a parting operation?",
    "options": ["To cut off a workpiece", "To create threads", "To drill holes", "To polish surfaces"],
    "answer": "To cut off a workpiece"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical depth of cut for finish milling aluminum?",
    "options": ["0.005-0.010 inches", "0.010-0.020 inches", "0.020-0.030 inches", "0.030-0.050 inches"],
    "answer": "0.010-0.020 inches"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the material removal rate for a milling operation with a width of cut of 1.0 inches, depth of cut of 0.05 inches, and feed rate of 15 inches/min?",
    "options": ["0.50 in³/min", "0.75 in³/min", "1.00 in³/min", "1.25 in³/min"],
    "answer": "0.75 in³/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical clearance angle for a carbide tool cutting brass?",
    "options": ["5-8 degrees", "8-12 degrees", "12-15 degrees", "15-20 degrees"],
    "answer": "5-8 degrees"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the feed rate for a 5-flute end mill cutting cast iron at a chip load of 0.002 inches/tooth and 1,200 RPM?",
    "options": ["10.0 inches/min", "12.0 inches/min", "14.0 inches/min", "16.0 inches/min"],
    "answer": "12.0 inches/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a boring operation?",
    "options": ["To enlarge and finish holes", "To cut threads", "To create slots", "To polish surfaces"],
    "answer": "To enlarge and finish holes"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical cutting speed for reaming steel with a high-speed steel reamer (in ft/min)?",
    "options": ["30-50", "50-70", "70-90", "90-110"],
    "answer": "50-70"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the power required for a turning operation with a material removal rate of 1.5 in³/min and a specific cutting energy of 1.4 hp/in³/min?",
    "options": ["1.8 hp", "2.1 hp", "2.4 hp", "2.7 hp"],
    "answer": "2.1 hp"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a drilling operation?",
    "options": ["To create holes", "To cut threads", "To shape surfaces", "To remove chips"],
    "answer": "To create holes"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical feed rate for milling brass with a high-speed steel cutter (in inches per tooth)?",
    "options": ["0.004-0.006", "0.006-0.008", "0.008-0.010", "0.010-0.012"],
    "answer": "0.006-0.008"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the spindle speed for turning a 4-inch diameter steel workpiece at a cutting speed of 80 ft/min?",
    "options": ["191 RPM", "229 RPM", "267 RPM", "305 RPM"],
    "answer": "76 RPM"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a vernier caliper?",
    "options": ["To measure precise linear dimensions", "To check surface finish", "To measure angles", "To align components"],
    "answer": "To measure precise linear dimensions"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital depth gauge?",
    "options": ["0.0001 inches", "0.0005 inches", "0.001 inches", "0.005 inches"],
    "answer": "0.0005 inches"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class RC5 fit with a nominal diameter of 1 inch (in inches)?",
    "options": ["+0.0016/-0.0000", "+0.0020/-0.0000", "+0.0024/-0.0000", "+0.0028/-0.0000"],
    "answer": "+0.0020/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a thread pitch gauge?",
    "options": ["To measure thread pitch", "To check surface roughness", "To measure hole depth", "To align components"],
    "answer": "To measure thread pitch"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical accuracy of a dial test indicator (in inches)?",
    "options": ["0.0001", "0.0005", "0.001", "0.005"],
    "answer": "0.0001"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum permissible error for a Grade B gage block (in microinches)?",
    "options": ["6", "8", "10", "12"],
    "answer": "8"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a surface plate?",
    "options": ["To provide a flat reference surface", "To measure angles", "To check thread pitch", "To align shafts"],
    "answer": "To provide a flat reference surface"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital protractor?",
    "options": ["0.01 degrees", "0.05 degrees", "0.1 degrees", "0.5 degrees"],
    "answer": "0.1 degrees"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class FN2 fit with a nominal diameter of 1 inch (in inches)?",
    "options": ["+0.0008/-0.0000", "+0.0010/-0.0000", "+0.0012/-0.0000", "+0.0014/-0.0000"],
    "answer": "+0.0008/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a height gauge?",
    "options": ["To measure vertical distances", "To check thread pitch", "To measure hole depth", "To align components"],
    "answer": "To measure vertical distances"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical accuracy of a laser alignment system (in inches)?",
    "options": ["0.0001", "0.001", "0.01", "0.1"],
    "answer": "0.001"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum permissible error for a precision level (in inches per foot)?",
    "options": ["0.0001", "0.0002", "0.0005", "0.001"],
    "answer": "0.0005"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a feeler gauge?",
    "options": ["To measure small gaps", "To check thread pitch", "To measure surface roughness", "To align components"],
    "answer": "To measure small gaps"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital vernier caliper?",
    "options": ["0.0001 inches", "0.0005 inches", "0.001 inches", "0.005 inches"],
    "answer": "0.0005 inches"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class LC4 fit with a nominal diameter of 1.5 inches (in inches)?",
    "options": ["+0.0012/-0.0000", "+0.0016/-0.0000", "+0.0020/-0.0000", "+0.0024/-0.0000"],
    "answer": "+0.0016/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a combination square?",
    "options": ["To measure angles and check squareness", "To check surface finish", "To measure hole depth", "To align shafts"],
    "answer": "To measure angles and check squareness"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical accuracy of a surface roughness tester (in microinches)?",
    "options": ["0.1", "0.5", "1.0", "5.0"],
    "answer": "0.5"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum permissible error for a master ring gauge (in inches)?",
    "options": ["0.00001", "0.00002", "0.00005", "0.0001"],
    "answer": "0.00001"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a plug gauge?",
    "options": ["To check hole dimensions", "To measure surface finish", "To check thread pitch", "To align components"],
    "answer": "To check hole dimensions"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital micrometer?",
    "options": ["0.00005 inches", "0.0001 inches", "0.0005 inches", "0.001 inches"],
    "answer": "0.0001 inches"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class RC8 fit with a nominal diameter of 2 inches (in inches)?",
    "options": ["+0.0040/-0.0000", "+0.0044/-0.0000", "+0.0048/-0.0000", "+0.0052/-0.0000"],
    "answer": "+0.0044/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a profilometer?",
    "options": ["To measure surface roughness", "To check thread pitch", "To measure hole depth", "To align components"],
    "answer": "To measure surface roughness"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of forging?",
    "options": ["To shape metal by compressive forces", "To join metals", "To remove material", "To polish surfaces"],
    "answer": "To shape metal by compressive forces"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical temperature range for hot forging steel (in °F)?",
    "options": ["1,500-1,800", "1,800-2,100", "2,100-2,400", "2,400-2,700"],
    "answer": "2,100-2,400"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical reduction ratio for a single pass in hot rolling steel?",
    "options": ["2:1 to 3:1", "3:1 to 4:1", "4:1 to 5:1", "5:1 to 6:1"],
    "answer": "3:1 to 4:1"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of casting?",
    "options": ["To shape molten metal in a mold", "To join metals", "To remove material", "To harden surfaces"],
    "answer": "To shape molten metal in a mold"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical shrinkage allowance for sand casting aluminum (in inches per inch)?",
    "options": ["0.005-0.008", "0.008-0.012", "0.012-0.016", "0.016-0.020"],
    "answer": "0.012-0.016"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a jig?",
    "options": ["To guide tools and hold workpieces", "To measure dimensions", "To polish surfaces", "To align components"],
    "answer": "To guide tools and hold workpieces"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical material for a drill jig bushing?",
    "options": ["Aluminum", "Hardened tool steel", "Brass", "Plastic"],
    "answer": "Hardened tool steel"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the typical tolerance for a drill jig bushing (in inches)?",
    "options": ["±0.0001", "±0.0002", "±0.0005", "±0.001"],
    "answer": "±0.0002"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a fixture?",
    "options": ["To hold workpieces during machining", "To guide tools", "To measure dimensions", "To polish surfaces"],
    "answer": "To hold workpieces during machining"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical hardness range for a tool steel die (in Rockwell C)?",
    "options": ["40-45", "45-50", "50-55", "55-60"],
    "answer": "55-60"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the value of the sine of 30 degrees, as provided in the Machinery's Handbook trigonometric tables?",
    "options": ["0.5", "0.707", "0.866", "1.0"],
    "answer": "0.5"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Per the Machinery's Handbook, what is the formula for the volume of a cone with radius r and height h?",
    "options": ["V = πr²h", "V = (1/3)πr²h", "V = πrh", "V = (1/2)πr²h"],
    "answer": "V = (1/3)πr²h"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 1/8, as listed in the Machinery's Handbook fraction tables?",
    "options": ["0.125", "0.25", "0.375", "0.5"],
    "answer": "0.125"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "According to the Machinery's Handbook, what is the formula for the hypotenuse of a right triangle with legs a and b?",
    "options": ["c = a + b", "c = √(a² + b²)", "c = a² + b²", "c = √(a + b)"],
    "answer": "c = √(a² + b²)"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the value of log₁₀(1000), as referenced in the Machinery's Handbook logarithm tables?",
    "options": ["1", "2", "3", "4"],
    "answer": "3"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the formula for the circumference of a circle with diameter d, per the Machinery's Handbook?",
    "options": ["C = πd", "C = πd²", "C = 2πd", "C = π/d"],
    "answer": "C = πd"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the tangent of 45 degrees, as provided in the Machinery's Handbook?",
    "options": ["0.5", "0.707", "1.0", "1.414"],
    "answer": "1.0"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the unit of force in the English system, as defined in the Machinery's Handbook?",
    "options": ["Pound", "Foot-pound", "Slug", "Newton"],
    "answer": "Pound"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "According to the Machinery's Handbook, what is the formula for work when force F is applied over distance d?",
    "options": ["W = F/d", "W = F × d", "W = F + d", "W = F² × d"],
    "answer": "W = F × d"
  },
  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the moment of inertia for a solid cylinder about its central axis, as given in the Machinery's Handbook (where M is mass and R is radius)?",
    "options": ["I = MR²", "I = (1/2)MR²", "I = (1/4)MR²", "I = 2MR²"],
    "answer": "I = (1/2)MR²"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of power, per the Machinery's Handbook?",
    "options": ["Force per unit area", "Work per unit time", "Mass per unit volume", "Energy per unit distance"],
    "answer": "Work per unit time"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the acceleration due to gravity in the English system, as listed in the Machinery's Handbook?",
    "options": ["9.81 ft/s²", "32.2 ft/s²", "16.4 ft/s²", "64.4 ft/s²"],
    "answer": "32.2 ft/s²"
  },
  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for kinetic energy of a rotating body, as provided in the Machinery's Handbook (where I is moment of inertia and ω is angular velocity)?",
    "options": ["KE = Iω", "KE = (1/2)Iω²", "KE = Iω²", "KE = (1/2)Iω"],
    "answer": "KE = (1/2)Iω²"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the resistance to motion between two surfaces, per the Machinery's Handbook?",
    "options": ["Friction", "Inertia", "Momentum", "Torque"],
    "answer": "Friction"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the coefficient of friction typically used for steel on steel (dry)?",
    "options": ["0.1-0.2", "0.3-0.4", "0.5-0.6", "0.7-0.8"],
    "answer": "0.5-0.6"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the maximum stress a material can withstand before breaking, per the Machinery's Handbook?",
    "options": ["Yield strength", "Ultimate strength", "Fatigue strength", "Shear strength"],
    "answer": "Ultimate strength"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for stress in a tensile test, as given in the Machinery's Handbook (where F is force and A is cross-sectional area)?",
    "options": ["σ = F × A", "σ = F / A", "σ = A / F", "σ = F + A"],
    "answer": "σ = F / A"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum shear stress in a circular shaft under torsion (where T is torque, r is radius, and J is polar moment of inertia)?",
    "options": ["τ = Tr / J", "τ = T / Jr", "τ = Jr / T", "τ = T / r"],
    "answer": "τ = Tr / J"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the deformation of a material under stress, per the Machinery's Handbook?",
    "options": ["Strain", "Stress", "Modulus", "Yield"],
    "answer": "Strain"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical yield strength of AISI 1020 steel, as listed in the Machinery's Handbook?",
    "options": ["25,000 psi", "35,000 psi", "45,000 psi", "55,000 psi"],
    "answer": "35,000 psi"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the deflection of a simply supported beam with a central point load, as provided in the Machinery's Handbook (where W is load, L is length, E is modulus of elasticity, and I is moment of inertia)?",
    "options": ["δ = WL³ / 48EI", "δ = WL² / 16EI", "δ = WL / EI", "δ = WL³ / 24EI"],
    "answer": "δ = WL³ / 48EI"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the ratio of stress to strain in the elastic region, per the Machinery's Handbook?",
    "options": ["Poisson’s ratio", "Modulus of elasticity", "Shear modulus", "Bulk modulus"],
    "answer": "Modulus of elasticity"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical Poisson’s ratio for steel?",
    "options": ["0.1-0.2", "0.2-0.3", "0.3-0.4", "0.4-0.5"],
    "answer": "0.3-0.4"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary alloying element in brass, as noted in the Machinery's Handbook?",
    "options": ["Zinc", "Tin", "Nickel", "Lead"],
    "answer": "Zinc"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the approximate density of aluminum, as listed in the Machinery's Handbook (in lb/in³)?",
    "options": ["0.05", "0.10", "0.15", "0.20"],
    "answer": "0.10"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the specific heat capacity of copper, as provided in the Machinery's Handbook (in Btu/lb-°F)?",
    "options": ["0.09", "0.12", "0.15", "0.18"],
    "answer": "0.09"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which material is known for its high thermal conductivity, per the Machinery's Handbook?",
    "options": ["Steel", "Copper", "Cast iron", "Titanium"],
    "answer": "Copper"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the melting point of low-carbon steel (approximate °F)?",
    "options": ["2,000", "2,500", "2,700", "3,000"],
    "answer": "2,700"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the electrical resistivity of aluminum, as listed in the Machinery's Handbook (in microohm-cm)?",
    "options": ["2.8", "5.6", "8.4", "11.2"],
    "answer": "2.8"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for a material’s ability to be drawn into a wire, per the Machinery's Handbook?",
    "options": ["Ductility", "Malleability", "Hardness", "Brittleness"],
    "answer": "Ductility"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical Rockwell hardness (B scale) for annealed copper?",
    "options": ["20-30", "30-40", "40-50", "50-60"],
    "answer": "40-50"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a set screw, as described in the Machinery's Handbook?",
    "options": ["To secure an object without a nut", "To distribute load", "To prevent corrosion", "To increase bolt strength"],
    "answer": "To secure an object without a nut"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the pitch of an M10 x 1.5 metric thread?",
    "options": ["1.0 mm", "1.25 mm", "1.5 mm", "2.0 mm"],
    "answer": "1.5 mm"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the minimum tensile strength of a 3/8-16 UNC Grade 2 bolt, as specified in the Machinery's Handbook?",
    "options": ["55,000 psi", "74,000 psi", "90,000 psi", "120,000 psi"],
    "answer": "74,000 psi"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the distance between threads on a screw, per the Machinery's Handbook?",
    "options": ["Pitch", "Lead", "Crest", "Root"],
    "answer": "Pitch"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the major diameter of a 5/16-24 UNF thread?",
    "options": ["0.3125 inches", "0.2500 inches", "0.3750 inches", "0.4375 inches"],
    "answer": "0.3125 inches"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the recommended torque for an M12 x 1.75 Grade 8.8 bolt (dry condition)?",
    "options": ["50 Nm", "75 Nm", "100 Nm", "125 Nm"],
    "answer": "100 Nm"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What type of thread is used for general-purpose applications, per the Machinery's Handbook?",
    "options": ["Acme", "Unified National", "Square", "Buttress"],
    "answer": "Unified National"
  },
  {
    "section": "Fasteners and Threads",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the thread depth for a standard 60-degree V-thread (where P is pitch)?",
    "options": ["0.6495P", "0.7500P", "0.8660P", "1.0000P"],
    "answer": "0.6495P"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What type of gear is used for high torque at low speeds, per the Machinery's Handbook?",
    "options": ["Spur gear", "Helical gear", "Worm gear", "Bevel gear"],
    "answer": "Worm gear"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the whole depth of a gear with a diametral pitch of 6?",
    "options": ["0.333 inches", "0.360 inches", "0.400 inches", "0.433 inches"],
    "answer": "0.360 inches"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the pitch diameter of a spur gear with 36 teeth and a diametral pitch of 9, as calculated using the Machinery's Handbook?",
    "options": ["3.5 inches", "4.0 inches", "4.5 inches", "5.0 inches"],
    "answer": "4.0 inches"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the number of teeth per inch of pitch diameter, per the Machinery's Handbook?",
    "options": ["Circular pitch", "Diametral pitch", "Module", "Addendum"],
    "answer": "Diametral pitch"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the efficiency of a well-designed spur gear system?",
    "options": ["80-85%", "85-90%", "90-95%", "95-98%"],
    "answer": "95-98%"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the velocity ratio of a gear train with a 20-tooth driver gear and a 60-tooth driven gear?",
    "options": ["1:2", "1:3", "2:1", "3:1"],
    "answer": "1:3"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What type of gear is used to connect intersecting shafts, per the Machinery's Handbook?",
    "options": ["Spur gear", "Helical gear", "Bevel gear", "Worm gear"],
    "answer": "Bevel gear"
  },
  {
    "section": "Gears and Power Transmission",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the circular pitch for a gear with a diametral pitch of 8?",
    "options": ["0.314 inches", "0.392 inches", "0.785 inches", "1.571 inches"],
    "answer": "0.392 inches"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a bearing, as described in the Machinery's Handbook?",
    "options": ["To increase torque", "To reduce friction", "To store energy", "To align gears"],
    "answer": "To reduce friction"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical clearance for a ball bearing?",
    "options": ["0.0001-0.0005 inches", "0.0005-0.0010 inches", "0.0010-0.0020 inches", "0.0020-0.0050 inches"],
    "answer": "0.0005-0.0010 inches"
  },
  {
    "section": "Bearings",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the equivalent load for a bearing under combined radial and thrust loads (where Fr is radial load, Fa is axial load, and X and Y are factors)?",
    "options": ["P = Fr + Fa", "P = XFr + YFa", "P = Fr / X + Fa / Y", "P = XFr - YFa"],
    "answer": "P = XFr + YFa"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which bearing type is suitable for high-speed applications, per the Machinery's Handbook?",
    "options": ["Roller bearing", "Ball bearing", "Thrust bearing", "Sleeve bearing"],
    "answer": "Ball bearing"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the primary advantage of a tapered roller bearing?",
    "options": ["Low cost", "High radial load capacity", "Combined radial and thrust load capacity", "Ease of lubrication"],
    "answer": "Combined radial and thrust load capacity"
  },
  {
    "section": "Bearings",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the basic static load rating for a bearing, as defined in the Machinery's Handbook?",
    "options": ["The load causing permanent deformation", "The load for 1 million revolutions", "The load for infinite life", "The load for 10,000 hours"],
    "answer": "The load causing permanent deformation"
  },
  {
    "section": "Bearings",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What type of bearing is used in low-speed, high-load applications, per the Machinery's Handbook?",
    "options": ["Ball bearing", "Roller bearing", "Needle bearing", "Plain bearing"],
    "answer": "Plain bearing"
  },
  {
    "section": "Bearings",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical lubricant for a high-speed ball bearing?",
    "options": ["Grease", "Oil", "Dry film", "Water"],
    "answer": "Oil"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a drill bit, as described in the Machinery's Handbook?",
    "options": ["To cut threads", "To remove material", "To create holes", "To polish surfaces"],
    "answer": "To create holes"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the recommended cutting speed for milling aluminum with a high-speed steel cutter (in ft/min)?",
    "options": ["50-100", "100-200", "200-300", "300-400"],
    "answer": "200-300"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the feed per tooth for a 6-flute end mill cutting steel at 10 inches per minute and 1,000 RPM?",
    "options": ["0.0017 inches/tooth", "0.0025 inches/tooth", "0.0033 inches/tooth", "0.0040 inches/tooth"],
    "answer": "0.0017 inches/tooth"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical clearance angle for a lathe tool cutting steel?",
    "options": ["0-5 degrees", "5-10 degrees", "10-15 degrees", "15-20 degrees"],
    "answer": "5-10 degrees"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the spindle speed for turning a 2-inch diameter steel workpiece at a cutting speed of 100 ft/min?",
    "options": ["191 RPM", "382 RPM", "573 RPM", "764 RPM"],
    "answer": "382 RPM"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a tap in machining?",
    "options": ["To cut threads", "To create holes", "To remove chips", "To polish surfaces"],
    "answer": "To cut threads"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical depth of cut for rough turning steel?",
    "options": ["0.010-0.020 inches", "0.020-0.050 inches", "0.050-0.100 inches", "0.100-0.200 inches"],
    "answer": "0.050-0.100 inches"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of heat treatment in manufacturing?",
    "options": ["To improve surface finish", "To alter material properties", "To reduce weight", "To increase corrosion"],
    "answer": "To alter material properties"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical quenching medium for hardening steel?",
    "options": ["Air", "Water", "Oil", "Salt"],
    "answer": "Oil"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the approximate tempering temperature for achieving a Rockwell C hardness of 40 in tool steel?",
    "options": ["300°F", "500°F", "700°F", "900°F"],
    "answer": "700°F"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of forging, as described in the Machinery's Handbook?",
    "options": ["To shape metal by heating and hammering", "To cut metal into shapes", "To join metal parts", "To polish metal surfaces"],
    "answer": "To shape metal by heating and hammering"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical casting process for producing complex shapes?",
    "options": ["Sand casting", "Die casting", "Investment casting", "Centrifugal casting"],
    "answer": "Investment casting"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the shrinkage allowance for cast iron (in inches per foot)?",
    "options": ["1/16", "1/8", "1/4", "3/8"],
    "answer": "1/8"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of electroplating?",
    "options": ["To remove material", "To apply a metal coating", "To harden surfaces", "To reduce friction"],
    "answer": "To apply a metal coating"
  },
  {
    "section": "Manufacturing Processes",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical welding process for joining thin sheet metal?",
    "options": ["Shielded metal arc welding", "Gas tungsten arc welding", "Submerged arc welding", "Oxyacetylene welding"],
    "answer": "Gas tungsten arc welding"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a micrometer, as described in the Machinery's Handbook?",
    "options": ["To measure angles", "To measure precise dimensions", "To check surface finish", "To align components"],
    "answer": "To measure precise dimensions"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the least count of a standard vernier caliper with a 0.001-inch resolution?",
    "options": ["0.0005 inches", "0.001 inches", "0.002 inches", "0.005 inches"],
    "answer": "0.001 inches"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class RC3 fit with a nominal diameter of 1 inch (in inches)?",
    "options": ["+0.0007/-0.0000", "+0.0010/-0.0000", "+0.0015/-0.0000", "+0.0020/-0.0000"],
    "answer": "+0.0010/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a dial indicator?",
    "options": ["To measure small displacements", "To check thread pitch", "To measure surface roughness", "To align shafts"],
    "answer": "To measure small displacements"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical accuracy of a surface plate (in inches per foot)?",
    "options": ["0.0001", "0.0005", "0.0010", "0.0020"],
    "answer": "0.0001"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum permissible error for a Grade A gage block (in microinches)?",
    "options": ["2", "4", "6", "8"],
    "answer": "4"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a thread gauge?",
    "options": ["To measure thread pitch", "To check surface finish", "To measure hole depth", "To align components"],
    "answer": "To measure thread pitch"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital caliper?",
    "options": ["0.0005 inches", "0.001 inches", "0.002 inches", "0.005 inches"],
    "answer": "0.0005 inches"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a jig in toolmaking?",
    "options": ["To guide the tool or workpiece", "To harden tools", "To measure dimensions", "To polish surfaces"],
    "answer": "To guide the tool or workpiece"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical material for a cutting tool?",
    "options": ["Mild steel", "High-speed steel", "Aluminum", "Copper"],
    "answer": "High-speed steel"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the recommended included angle for a twist drill point?",
    "options": ["90 degrees", "118 degrees", "135 degrees", "150 degrees"],
    "answer": "118 degrees"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a fixture in toolmaking?",
    "options": ["To hold the workpiece", "To cut material", "To measure dimensions", "To align tools"],
    "answer": "To hold the workpiece"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical hardness of a carbide cutting tool (Rockwell C scale)?",
    "options": ["40-50", "50-60", "60-70", "70-80"],
    "answer": "70-80"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the recommended lip relief angle for a twist drill cutting steel?",
    "options": ["5-7 degrees", "8-12 degrees", "13-15 degrees", "16-20 degrees"],
    "answer": "8-12 degrees"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a die in toolmaking?",
    "options": ["To cut external threads", "To measure dimensions", "To hold workpieces", "To polish surfaces"],
    "answer": "To cut external threads"
  },
  {
    "section": "Toolmaking",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical coating for a high-performance cutting tool?",
    "options": ["Zinc", "Titanium nitride", "Chromium", "Nickel"],
    "answer": "Titanium nitride"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of welding, as described in the Machinery's Handbook?",
    "options": ["To join metal parts", "To cut metal", "To measure dimensions", "To polish surfaces"],
    "answer": "To join metal parts"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical shielding gas for MIG welding steel?",
    "options": ["Argon", "Helium", "Carbon dioxide", "Nitrogen"],
    "answer": "Carbon dioxide"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the recommended electrode for welding stainless steel using shielded metal arc welding?",
    "options": ["E6010", "E7018", "E308L", "E4043"],
    "answer": "E308L"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a brazing process?",
    "options": ["To join metals using a filler metal", "To cut metals", "To harden surfaces", "To measure dimensions"],
    "answer": "To join metals using a filler metal"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical flame type for oxyacetylene welding?",
    "options": ["Oxidizing", "Neutral", "Carburizing", "Reducing"],
    "answer": "Neutral"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the approximate melting point of a silver brazing alloy (°F)?",
    "options": ["1,000", "1,200", "1,400", "1,600"],
    "answer": "1,200"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of soldering?",
    "options": ["To join metals with low melting point filler", "To cut metals", "To harden surfaces", "To align components"],
    "answer": "To join metals with low melting point filler"
  },
  {
    "section": "Welding and Joining",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical current type for TIG welding aluminum?",
    "options": ["DC straight polarity", "DC reverse polarity", "AC", "Pulse DC"],
    "answer": "AC"
  },
    {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a tolerance, as defined in *Machinery's Handbook*?",
    "options": ["The exact dimension of a part", "The permissible range of variation in a dimension", "The maximum load a part can withstand", "The surface finish of a part"],
    "answer": "The permissible range of variation in a dimension"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of specifying tolerances on engineering drawings?",
    "options": ["To increase manufacturing costs", "To ensure parts function and assemble correctly", "To improve aesthetic appearance", "To simplify machining processes"],
    "answer": "To ensure parts function and assemble correctly"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a fit, as described in *Machinery's Handbook*?",
    "options": ["The degree of tightness or looseness between mating parts", "The surface texture of a part", "The weight of a component", "The material strength of a part"],
    "answer": "The degree of tightness or looseness between mating parts"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which standard governs tolerances and fits in the United States, according to *Machinery's Handbook*?",
    "options": ["ISO 286", "ANSI/ASME B4.1", "DIN 7160", "JIS B 0401"],
    "answer": "ANSI/ASME B4.1"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is an interference fit?",
    "options": ["A fit with clearance between parts", "A fit where the shaft is larger than the hole", "A fit where parts slide freely", "A fit with no tolerance specified"],
    "answer": "A fit where the shaft is larger than the hole"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a clearance fit?",
    "options": ["A fit where the shaft is smaller than the hole", "A fit where the shaft is larger than the hole", "A fit with no clearance or interference", "A fit requiring adhesive bonding"],
    "answer": "A fit where the shaft is smaller than the hole"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does the term 'nominal size' refer to in tolerancing?",
    "options": ["The exact measured dimension", "The theoretical or basic size of a part", "The maximum allowable dimension", "The minimum allowable dimension"],
    "answer": "The theoretical or basic size of a part"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a unilateral tolerance?",
    "options": ["A tolerance specified in one direction from the nominal size", "A tolerance specified in both directions equally", "A tolerance with no limits", "A tolerance applied to fits only"],
    "answer": "A tolerance specified in one direction from the nominal size"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is a bilateral tolerance?",
    "options": ["A tolerance specified in one direction only", "A tolerance specified in both directions from the nominal size", "A tolerance with no upper limit", "A tolerance applied to non-circular features"],
    "answer": "A tolerance specified in both directions from the nominal size"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does the term 'allowance' refer to in the context of fits?",
    "options": ["The maximum dimension of a part", "The intentional difference between the dimensions of mating parts", "The surface finish requirement", "The material strength of a part"],
    "answer": "The intentional difference between the dimensions of mating parts"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the maximum material condition (MMC) of a hole?",
    "options": ["Smallest hole diameter", "Largest hole diameter", "Nominal hole diameter", "Average hole diameter"],
    "answer": "Smallest hole diameter"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the maximum material condition (MMC) of a shaft?",
    "options": ["Smallest shaft diameter", "Largest shaft diameter", "Nominal shaft diameter", "Average shaft diameter"],
    "answer": "Largest shaft diameter"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is a transition fit, as defined in *Machinery's Handbook*?",
    "options": ["A fit that always results in clearance", "A fit that may result in either clearance or interference", "A fit that always results in interference", "A fit with no tolerance specified"],
    "answer": "A fit that may result in either clearance or interference"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which type of fit is typically used for a press-fit bearing installation?",
    "options": ["Clearance fit", "Interference fit", "Transition fit", "Sliding fit"],
    "answer": "Interference fit"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What does the designation 'H7/g6' indicate in the ISO tolerance system?",
    "options": ["A clearance fit with a close tolerance hole and shaft", "An interference fit with a loose tolerance", "A transition fit with a medium tolerance", "A fit with no specified tolerance"],
    "answer": "A clearance fit with a close tolerance hole and shaft"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the least material condition (LMC) of a hole?",
    "options": ["Smallest hole diameter", "Largest hole diameter", "Nominal hole diameter", "Average hole diameter"],
    "answer": "Largest hole diameter"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for tolerance, given upper limit (UL) and lower limit (LL) of a dimension?",
    "options": ["Tolerance = UL - LL", "Tolerance = UL + LL", "Tolerance = UL / LL", "Tolerance = UL × LL"],
    "answer": "Tolerance = UL - LL"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which fit is commonly used for parts that need to slide freely, such as a piston in a cylinder?",
    "options": ["Interference fit", "Transition fit", "Clearance fit", "Force fit"],
    "answer": "Clearance fit"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the purpose of the basic hole system in tolerancing?",
    "options": ["To use the hole as the reference with standard tolerances and vary the shaft", "To use the shaft as the reference", "To eliminate tolerances", "To standardize surface finish"],
    "answer": "To use the hole as the reference with standard tolerances and vary the shaft"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the purpose of the basic shaft system in tolerancing?",
    "options": ["To use the shaft as the reference with standard tolerances and vary the hole", "To use the hole as the reference", "To eliminate fits", "To simplify machining"],
    "answer": "To use the shaft as the reference with standard tolerances and vary the hole"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the allowance in a clearance fit, given the maximum shaft diameter (D_s) and minimum hole diameter (D_h)?",
    "options": ["Allowance = D_h - D_s", "Allowance = D_s - D_h", "Allowance = D_h + D_s", "Allowance = D_h / D_s"],
    "answer": "Allowance = D_h - D_s"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "In the ISO tolerance system, what does the letter 'H' represent for a hole?",
    "options": ["A tolerance with zero deviation at the maximum material condition", "A tolerance with zero deviation at the least material condition", "A high interference fit", "A loose clearance fit"],
    "answer": "A tolerance with zero deviation at the maximum material condition"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance grade in the ISO system, such as IT7?",
    "options": ["The degree of precision of the tolerance", "The type of fit", "The surface finish requirement", "The material strength specification"],
    "answer": "The degree of precision of the tolerance"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the maximum interference in an interference fit, given the maximum shaft diameter (D_s) and minimum hole diameter (D_h)?",
    "options": ["Interference = D_s - D_h", "Interference = D_h - D_s", "Interference = D_s + D_h", "Interference = D_h / D_s"],
    "answer": "Interference = D_s - D_h"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "According to *Machinery's Handbook*, what is the purpose of geometric dimensioning and tolerancing (GD&T)?",
    "options": ["To specify material properties", "To define precise geometric requirements for part features", "To eliminate the need for fits", "To standardize machining processes"],
    "answer": "To define precise geometric requirements for part features"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What does a datum feature represent in tolerancing?",
    "options": ["The maximum dimension of a part", "A reference point, line, or surface for measurements", "The surface finish requirement", "The fit type"],
    "answer": "A reference point, line, or surface for measurements"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the bonus tolerance in GD&T, as per *Machinery's Handbook*?",
    "options": ["Additional tolerance as a feature departs from maximum material condition", "The minimum tolerance allowed", "The tolerance for surface finish", "The tolerance for material strength"],
    "answer": "Additional tolerance as a feature departs from maximum material condition"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which fit is typically used for a shaft and bearing that must rotate freely?",
    "options": ["Interference fit", "Transition fit", "Running fit (clearance)", "Force fit"],
    "answer": "Running fit (clearance)"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the purpose of the ANSI/ASME B4.1 preferred limits and fits standard?",
    "options": ["To standardize surface finish requirements", "To provide standard tolerances and fits for mating parts", "To specify material properties", "To define machining speeds"],
    "answer": "To provide standard tolerances and fits for mating parts"
  },
  {
    "section": "Tolerances and Fits",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the effect of tighter tolerances on manufacturing, as noted in *Machinery's Handbook*?",
    "options": ["Reduces manufacturing cost", "Increases manufacturing cost and time", "Has no effect on cost", "Simplifies quality control"],
    "answer": "Increases manufacturing cost and time"
  },
  {
      "section": "Tolerances and Fits",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the difference between maximum and minimum limits of size?",
      "options": ["Tolerance", "Allowance", "Fit", "Deviation"],
      "answer": "Tolerance"
  },
  {
      "section": "Tolerances and Fits",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "Which type of fit always ensures clearance between parts?",
      "options": ["Clearance fit", "Interference fit", "Transition fit", "Locational fit"],
      "answer": "Clearance fit"
  },
  {
      "section": "Tolerances and Fits",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What ISO fit is typically used for sliding shafts?",
      "options": ["H7/g6", "H11/h11", "H9/f8", "H7/h6"],
      "answer": "H7/g6"
  },
  {
      "section": "Tolerances and Fits",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What term refers to the intentional difference in dimensions between mating parts?",
      "options": ["Allowance", "Tolerance", "Deviation", "Clearance"],
      "answer": "Allowance"
  },
  {
      "section": "Tolerances and Fits",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "Which fit results in a press-fit condition?",
      "options": ["Interference fit", "Running fit", "Loose fit", "Transition fit"],
      "answer": "Interference fit"
  },
  {
      "section": "Materials",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "Which material has the highest thermal conductivity?",
      "options": ["Copper", "Aluminum", "Steel", "Titanium"],
      "answer": "Copper"
  },
  {
      "section": "Materials",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What does the Rockwell C scale measure?",
      "options": ["Hardness of hardened steels", "Tensile strength", "Elasticity", "Toughness"],
      "answer": "Hardness of hardened steels"
  },
  {
      "section": "Materials",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "Which material property indicates resistance to deformation?",
      "options": ["Hardness", "Elasticity", "Ductility", "Toughness"],
      "answer": "Hardness"
  },
  {
      "section": "Materials",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the typical density of steel?",
      "options": ["7.85 g/cm\u00b3", "8.90 g/cm\u00b3", "10.5 g/cm\u00b3"],
      "answer": "7.85 g/cm\u00b3"
  },
  {
      "section": "Materials",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "Which metal is most resistant to corrosion?",
      "options": ["Titanium", "Aluminum", "Steel", "Magnesium"],
      "answer": "Titanium"
  },
  {
      "section": "GD&T",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What does the GD&T symbol \u2300 represent?",
      "options": ["Diameter", "Flatness", "Perpendicularity","Cylindricity"],
      "answer": "Diameter"
  },
  {
      "section": "GD&T",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "Which symbol represents flatness?",
      "options": ["A parallelogram", "A circle", "A square", "A triangle"],
      "answer": "A parallelogram"
  },
  {
      "section": "GD&T",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "The first compartment of a feature control frame has:",
      "options": ["Total tolerance for the feature", "One of the 14 geometric characteristic symbols", "Datum feature modifiers", "Bore size"],
      "answer": "One of the 14 geometric characteristic symbols"
  },
  {
      "section": "GD&T",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "Which tolerance controls form without a datum?",
      "options": ["Straightness", "Position", "Profile", "Parallelism"],
      "answer": "Straightness"
  },   
  {
      "section": "GD&T",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "Which of the 14 geometric characteristics is represented by a circle?",
      "options": ["True position", "Cylindricity", "Circularity (Roundness)", "Concentricity"],
      "answer": "Circularity (Roundness)"
  },
  {
      "section": "GD&T",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "The default tolerances stated in the title block of a drawing not apply to basic dimensions:",
      "options": ["True", "False"],
      "answer": "True"
  },    
  {
      "section": "GD&T",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "If a numerical value on a print is preceded by the letter 'R', the R stands for:",
      "options": ["Roundness", "Revision", "Reference", "Radius"],
      "answer": "Radius"
  },  
  {
      "section": "GD&T",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What are the five categories of geometric characteristics?",
      "options": ["Size, Angle, Profile, Location, Form", "Form, Orientation, Profile, Runout, Location", "Shape & Size", "Form, Orientation, Surface, Centerplane, Location"],
      "answer": "Form, Orientation, Profile, Runout, Location"
  },
  {
      "section": "GD&T",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "Which two of the 14 geometric characteristics defined in ASME Y14.5-2009 were eliminated in ASME Y14.5-2018?",
      "options": ["Parallelism and Concentricity", "Symmetry and Circularity", "Angularity and Concentricity", "Concentricity and Symmetry"],
      "answer": "Concentricity and Symmetry"
  },
  {
      "section": "GD&T",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "According to ASME Y14.5-2009, which of the 14 geometric characteristics is represented by a straight line?",
      "options": ["Profile of a line", "Circular runout", "Symmetry", "Straightness"],
      "answer": "Straightness"
  },
  {
      "section": "GD&T",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What does true position tolerance define?",
      "options": ["Locates center points, axes, and median planes for size features.  Can also control orientation.", "Surface roughness", "Part symmetry", "Edge roundness"],
      "answer": "Locates center points, axes, and median planes for size features.  Can also control orientation."
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the tensile strength of a Grade 8 bolt?",
      "options": ["150,000 psi", "120,000 psi", "90,000 psi", "60,000 psi"],
      "answer": "150,000 psi"
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "Which thread type has the finest pitch?",
      "options": ["UNF", "UNC", "UNJ", "Acme"],
      "answer": "UNF"
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the purpose of a lock nut?",
      "options": ["Prevent loosening", "Reduce preload", "Seal threads", "Increase thread pitch"],
      "answer": "Prevent loosening"
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What does 'UNC' stand for in thread types?",
      "options": ["Unified National Coarse", "Unified Nominal Coarse", "Universal Nut Class", "Unified Nut Clearance"],
      "answer": "Unified National Coarse"
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the standard thread pitch for 1/4-20 UNC?",
      "options": ["20 TPI", "13 TPI", "28 TPI", "32 TPI"],
      "answer": "20 TPI"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "Which unit is used for cutting speed?",
      "options": ["SFM", "RPM", "IPM", "FPM\u00b2"],
       "answer": "SFM"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What formula is used to calculate RPM from cutting speed and diameter?",
      "options": ["RPM = (CS \u00d7 4) / D", "RPM = CS / D", "RPM = D / CS", "RPM = CS \u00d7 D"],
      "answer": "RPM = (CS \u00d7 4) / D"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "Which factor most affects tool wear?",
      "options": ["Cutting speed", "Coolant color", "Insert shape", "Machine age"],
      "answer": "Cutting speed"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "Which material allows highest machining speeds?",
      "options": ["Aluminum", "Steel", "Titanium", "Cast iron"],
      "answer": "Aluminum"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What type of gear is used to transmit motion between non-parallel, non-intersecting shafts?",
      "options": ["Worm gear", "Spur gear", "Bevel gear", "Helical gear"],
      "answer": "Worm gear"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the term for the distance a gear tooth travels during one complete revolution?",
      "options": ["Pitch", "Module", "Lead", "Backlash"],
      "answer": "Pitch"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the primary purpose of gears in a mechanical system, as described in *Machinery's Handbook*?",
      "options": ["To store energy", "To transmit power and motion between rotating shafts", "To reduce friction", "To increase component weight"],
      "answer": "To transmit power and motion between rotating shafts"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the term for the theoretical circle where gear teeth roll without slipping?",
      "options": ["Root Circle", "Pitch Circle", "Base Circle", "Addendum Circle"],
      "answer": "Pitch Circle"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "Which type of gear is used to transmit motion between parallel shafts?",
      "options": ["Bevel Gear", "Worm Gear", "Spur Gear", "Hypoid Gear"],
      "answer": "Spur Gear"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What does the term 'diametral pitch' refer to in gear design?",
      "options": ["The number of teeth per inch of pitch diameter", "The distance between adjacent teeth", "The diameter of the gear", "The thickness of the gear tooth"],
      "answer": "The number of teeth per inch of pitch diameter"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the function of a gear train?",
      "options": ["To connect gears to achieve desired speed or torque ratios", "To lubricate the system", "To reduce gear size", "To eliminate backlash"],
      "answer": "To connect gears to achieve desired speed or torque ratios"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What does AGMA stand for in the context of gear standards?",
      "options": ["American Gear Manufacturers Association", "Automated Gear Machinery Alliance", "Association for Gear Manufacturing", "American General Machine Association"],
      "answer": "American Gear Manufacturers Association"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the formula for diametral pitch (P_d), given the number of teeth (N) and pitch diameter (D)?",
      "options": ["P_d = N / D", "P_d = D / N", "P_d = N × D", "P_d = D × π / N"],
      "answer": "P_d = N / D"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the circular pitch (P_c) of a gear, as defined in *Machinery's Handbook*?",
      "options": ["The diameter of the pitch circle", "The distance between corresponding points on adjacent teeth along the pitch circle", "The number of teeth per inch", "The depth of the gear tooth"],
      "answer": "The distance between corresponding points on adjacent teeth along the pitch circle"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "Which gear type is designed for smooth and quiet operation due to its angled teeth?",
      "options": ["Spur Gear", "Bevel Gear", "Helical Gear", "Worm Gear"],
      "answer": "Helical Gear"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the formula for the gear ratio (GR) of a simple gear train with driving gear teeth (N_1) and driven gear teeth (N_2)?",
      "options": ["GR = N_1 / N_2", "GR = N_2 / N_1", "GR = N_1 × N_2", "GR = N_2 - N_1"],
      "answer": "GR = N_2 / N_1"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the addendum of a gear, as per *Machinery's Handbook*?",
      "options": ["The distance from the pitch circle to the root circle", "The distance from the pitch circle to the outer circle", "The total depth of the gear tooth", "The width of the gear tooth"],
      "answer": "The distance from the pitch circle to the outer circle"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the purpose of backlash in gear design?",
      "options": ["To increase gear strength", "To allow for thermal expansion and lubrication", "To reduce gear efficiency", "To eliminate gear meshing"],
      "answer": "To allow for thermal expansion and lubrication"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "Which gear type is used to transmit power between intersecting shafts?",
      "options": ["Spur Gear", "Helical Gear", "Bevel Gear", "Worm Gear"],
      "answer": "Bevel Gear"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the formula for the pitch diameter (D) of a gear, given the number of teeth (N) and diametral pitch (P_d)?",
      "options": ["D = N / P_d", "D = P_d / N", "D = N × P_d", "D = N × π / P_d"],
      "answer": "D = N / P_d"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the primary disadvantage of helical gears compared to spur gears?",
      "options": ["Lower efficiency due to axial thrust", "Higher noise levels", "Lower load capacity", "Simpler manufacturing"],
      "answer": "Lower efficiency due to axial thrust"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the center distance (C) between two meshing spur gears with pitch diameters D_1 and D_2?",
      "options": ["C = (D_1 + D_2) / 2", "C = D_1 + D_2", "C = (D_1 × D_2) / 2", "C = D_1 / D_2"],
      "answer": "C = (D_1 + D_2) / 2"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the standard pressure angle for most involute gear teeth in the United States, as per *Machinery's Handbook*?",
      "options": ["14.5 degrees", "20 degrees", "25 degrees", "30 degrees"],
      "answer": "20 degrees"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the torque transmitted by a gear, given power (P) in horsepower and rotational speed (N) in RPM?",
      "options": ["T = (P × 63025) / N", "T = (P × N) / 63025", "T = P / (N × 63025)", "T = N / (P × 63025)"],
      "answer": "T = (P × 63025) / N"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "In a planetary gear system, which component is typically held stationary to achieve a reduction ratio?",
      "options": ["Sun Gear", "Planet Carrier", "Ring Gear", "Planet Gears"],
      "answer": "Ring Gear"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the module (m) of a metric gear, given pitch diameter (D) and number of teeth (N)?",
      "options": ["m = D / N", "m = N / D", "m = D × N", "m = D / (N × π)"],
      "answer": "m = D / N"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the contact ratio of a gear pair, as defined in *Machinery's Handbook*?",
      "options": ["The ratio of arc of action to circular pitch", "The ratio of pitch diameter to number of teeth", "The ratio of addendum to dedendum", "The ratio of gear teeth to pitch circle"],
      "answer": "The ratio of arc of action to circular pitch"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the dedendum of a gear, as per *Machinery's Handbook*?",
      "options": ["The distance from the pitch circle to the outer circle", "The distance from the pitch circle to the root circle", "The total depth of the gear tooth", "The width of the gear tooth"],
      "answer": "The distance from the pitch circle to the root circle"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the primary advantage of a worm gear system?",
      "options": ["High efficiency", "High gear reduction in a compact design", "Low manufacturing cost", "No need for lubrication"],
      "answer": "High gear reduction in a compact design"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the circular pitch (P_c) of a gear, given the diametral pitch (P_d)?",
      "options": ["P_c = π / P_d", "P_c = P_d / π", "P_c = π × P_d", "P_c = 1 / (π × P_d)"],
      "answer": "P_c = π / P_d"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the purpose of the involute tooth profile in gear design?",
      "options": ["To increase gear weight", "To ensure constant velocity ratio during meshing", "To reduce gear strength", "To simplify manufacturing"],
      "answer": "To ensure constant velocity ratio during meshing"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the base circle in gear design?",
      "options": ["The circle where teeth begin to mesh", "The circle from which the involute tooth profile is generated", "The circle defining the gear's outer diameter", "The circle at the root of the gear teeth"],
      "answer": "The circle from which the involute tooth profile is generated"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the primary disadvantage of worm gears compared to other gear types?",
      "options": ["High manufacturing cost", "Lower efficiency due to sliding contact", "Limited load capacity", "Inability to transmit motion"],
      "answer": "Lower efficiency due to sliding contact"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the velocity ratio of a compound gear train with driving gear teeth N_1, N_3 and driven gear teeth N_2, N_4?",
      "options": ["VR = (N_1 × N_3) / (N_2 × N_4)", "VR = (N_2 × N_4) / (N_1 × N_3)", "VR = N_1 / N_2 + N_3 / N_4", "VR = (N_1 + N_3) / (N_2 + N_4)"],
      "answer": "VR = (N_2 × N_4) / (N_1 × N_3)"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the purpose of a gear's fillet radius at the root of the tooth?",
      "options": ["To increase tooth thickness", "To reduce stress concentration", "To improve lubrication", "To increase backlash"],
      "answer": "To reduce stress concentration"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the term for the total depth of a gear tooth, from the top to the bottom?",
      "options": ["Addendum", "Dedendum", "Whole Depth", "Circular Pitch"],
      "answer": "Whole Depth"
  },
  {
      "section": "Gears and Gear Design",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "Which gear type is most suitable for high-speed, low-noise transmission?",
      "options": ["Helical gear", "Spur gear", "Worm gear", "Bevel gear"],
      "answer": "Helical gear"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the formula for the perimeter of a rectangle with length l and width w?",
      "options": ["P = l + w", "P = 2(l + w)", "P = lw", "P = 2lw"],
      "answer": "P = 2(l + w)"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the cosine of 45 degrees, as listed in the Machinery's Handbook trigonometric tables?",
      "options": ["0.5", "0.707", "0.866", "1.0"],
      "answer": "0.707"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the volume of a cylinder with radius r and height h?",
      "options": ["V = πr²h", "V = 2πrh", "V = πrh", "V = (1/2)πr²h"],
      "answer": "V = πr²h"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the decimal equivalent of 9/16 fraction tables?",
      "options": ["0.5", "0.5625", "0.625", "0.6875"],
      "answer": "0.5625"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the secant of 60 degrees?",
      "options": ["0.5", "1.0", "1.732", "2.0"],
      "answer": "2.0"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the moment of inertia of a circular section about a diameter (where r is radius)?",
      "options": ["I = πr⁴/4", "I = πr⁴/8", "I = πr³/4", "I = πr²/2"],
      "answer": "I = πr⁴/4"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the value of 14², as referenced in the Machinery's Handbook exponent tables?",
      "options": ["176", "186", "196", "206"],
      "answer": "196"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the cotangent of 30 degrees?",
      "options": ["0.577", "1.0", "1.732", "2.0"],
      "answer": "1.732"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the surface area of a cone (excluding the base) with radius r and slant height l?",
      "options": ["A = πrl", "A = πr²l", "A = 2πrl", "A = πr(l + r)"],
      "answer": "A = πrl"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the decimal equivalent of 1/8 fraction tables?",
      "options": ["0.0625", "0.125", "0.1875", "0.25"],
      "answer": "0.125"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the sine of 30 degrees, as listed in the Machinery's Handbook?",
      "options": ["0.5", "0.707", "0.866", "1.0"],
      "answer": "0.5"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the sum of the interior angles of a decagon, as provided in the Machinery's Handbook?",
      "options": ["1080 degrees", "1260 degrees", "1440 degrees", "1620 degrees"],
      "answer": "1440 degrees"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the value of 15², as referenced in the Machinery's Handbook exponent tables?",
      "options": ["205", "215", "225", "235"],
      "answer": "225"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the formula for the area of a regular hexagon with side s?",
      "options": ["A = (3√3/2)s²", "A = 3s²", "A = (√3/2)s²", "A = 6s²"],
      "answer": "A = (3√3/2)s²"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the value of log₁₀(1,000) logarithm tables?",
      "options": ["1", "2", "3", "4"],
      "answer": "3"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the decimal equivalent of 7/32 fraction tables?",
      "options": ["0.1875", "0.21875", "0.25", "0.28125"],
      "answer": "0.21875"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the cosecant of 30 degrees?",
      "options": ["0.5", "1.0", "1.732", "2.0"],
      "answer": "2.0"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the centroid of a semicircle with radius r (distance from the diameter)?",
      "options": ["4r/(3π)", "2r/π", "r/2", "3r/(4π)"],
      "answer": "4r/(3π)"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the value of 16², as referenced in the Machinery's Handbook exponent tables?",
      "options": ["236", "246", "256", "266"],
      "answer": "256"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the formula for the perimeter of a regular decagon with side s?",
      "options": ["P = 8s", "P = 9s", "P = 10s", "P = 12s"],
      "answer": "P = 10s"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the moment of inertia of a hollow rectangular section about its centroidal axis parallel to the base (where b and h are outer dimensions, b₁ and h₁ are inner)?",
      "options": ["I = (bh³ - b₁h₁³)/12", "I = (bh³ - b₁h₁³)/3", "I = (bh - b₁h₁)/12", "I = (bh³ - b₁h₁³)/36"],
      "answer": "I = (bh³ - b₁h₁³)/12"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the decimal equivalent of 11/32 fraction tables?",
      "options": ["0.3125", "0.34375", "0.375", "0.40625"],
      "answer": "0.34375"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the tangent of 15 degrees?",
      "options": ["0.268", "0.364", "0.577", "1.0"],
      "answer": "0.268"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the volume of a torus with major radius R and minor radius r?",
      "options": ["V = π²Rr²", "V = 2π²Rr²", "V = πRr²", "V = 4π²Rr"],
      "answer": "V = 2π²Rr²"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the value of 17², as referenced in the Machinery's Handbook exponent tables?",
      "options": ["279", "289", "299", "309"],
      "answer": "289"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the sine of 15 degrees?",
      "options": ["0.259", "0.5", "0.707", "0.866"],
      "answer": "0.259"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the value of log₁₀(10,000) logarithm tables?",
      "options": ["2", "3", "4", "5"],
      "answer": "4"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the decimal equivalent of 13/32 fraction tables?",
      "options": ["0.375", "0.40625", "0.4375", "0.46875"],
      "answer": "0.40625"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the cosine of 15 degrees?",
      "options": ["0.5", "0.707", "0.866", "0.966"],
      "answer": "0.966"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the surface area of a cylinder (including both ends) with radius r and height h?",
      "options": ["A = 2πr² + 2πrh", "A = πr² + πrh", "A = 2πr² + πrh", "A = πr² + 2πrh"],
      "answer": "A = 2πr² + 2πrh"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the recommended cutting speed for drilling aluminum with a high-speed steel drill (in ft/min)?",
      "options": ["100-150", "150-200", "200-250", "250-300"],
      "answer": "200-250"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the spindle speed for turning a 3-inch diameter brass workpiece at a cutting speed of 180 ft/min?",
      "options": ["229 RPM", "286 RPM", "344 RPM", "382 RPM"],
      "answer": "229 RPM"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a grinding operation?",
      "options": ["To achieve high precision and surface finish", "To cut threads", "To drill holes", "To shape gears"],
      "answer": "To achieve high precision and surface finish"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical feed rate for turning brass with a carbide tool (in inches per revolution)?",
      "options": ["0.005-0.010", "0.010-0.015", "0.015-0.020", "0.020-0.025"],
      "answer": "0.010-0.015"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the material removal rate for a milling operation with a width of cut of 2.0 inches, depth of cut of 0.08 inches, and feed rate of 12 inches/min?",
      "options": ["1.44 in³/min", "1.92 in³/min", "2.40 in³/min", "2.88 in³/min"],
      "answer": "1.92 in³/min"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical rake angle for a carbide tool cutting cast iron?",
      "options": ["0-5 degrees", "5-10 degrees", "10-15 degrees", "15-20 degrees"],
      "answer": "0-5 degrees"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the feed rate for a 4-flute end mill cutting brass at a chip load of 0.004 inches/tooth and 1,800 RPM?",
      "options": ["24.0 inches/min", "28.8 inches/min", "32.0 inches/min", "38.4 inches/min"],
      "answer": "28.8 inches/min"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a facing operation?",
      "options": ["To create a flat surface", "To cut threads", "To drill holes", "To shape contours"],
      "answer": "To create a flat surface"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical surface finish achieved by grinding (in microinches)?",
      "options": ["8-16", "16-32", "32-63", "63-125"],
      "answer": "8-16"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the chip load for a 3-flute end mill cutting aluminum at a feed rate of 18 inches/min and 2,000 RPM?",
      "options": ["0.0020 inches/tooth", "0.0025 inches/tooth", "0.0030 inches/tooth", "0.0035 inches/tooth"],
      "answer": "0.0030 inches/tooth"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a drilling operation?",
      "options": ["To create holes", "To cut threads", "To shape surfaces", "To remove chips"],
      "answer": "To create holes"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical clearance angle for a high-speed steel tool cutting aluminum?",
      "options": ["5-8 degrees", "8-12 degrees", "12-15 degrees", "15-20 degrees"],
      "answer": "8-12 degrees"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the power required for a turning operation with a material removal rate of 1.2 in³/min and a specific cutting energy of 1.3 hp/in³/min?",
      "options": ["1.44 hp", "1.56 hp", "1.68 hp", "1.80 hp"],
      "answer": "1.56 hp"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a reaming operation?",
      "options": ["To finish and size holes", "To cut threads", "To create slots", "To polish surfaces"],
      "answer": "To finish and size holes"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical cutting speed for turning stainless steel with a carbide tool (in ft/min)?",
      "options": ["100-150", "150-200", "200-250", "250-300"],
      "answer": "150-200"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the spindle speed for drilling a 3/8-inch hole in steel at a cutting speed of 80 ft/min?",
      "options": ["611 RPM", "764 RPM", "916 RPM", "1146 RPM"],
      "answer": "611 RPM"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a tapping operation?",
      "options": ["To create internal threads", "To cut slots", "To drill holes", "To polish surfaces"],
      "answer": "To create internal threads"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical feed rate for reaming aluminum (in inches per revolution)?",
      "options": ["0.002-0.004", "0.004-0.006", "0.006-0.008", "0.008-0.010"],
      "answer": "0.006-0.008"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the material removal rate for a turning operation with a depth of cut of 0.12 inches, feed rate of 0.015 inches/rev, and spindle speed of 600 RPM?",
      "options": ["1.08 in³/min", "1.44 in³/min", "1.80 in³/min", "2.16 in³/min"],
      "answer": "1.08 in³/min"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a counterboring operation?",
      "options": ["To create a flat-bottomed hole", "To cut threads", "To drill holes", "To polish surfaces"],
      "answer": "To create a flat-bottomed hole"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical depth of cut for rough turning steel?",
      "options": ["0.050-0.100 inches", "0.100-0.150 inches", "0.150-0.200 inches", "0.200-0.250 inches"],
      "answer": "0.100-0.150 inches"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the feed rate for a 2-flute end mill cutting stainless steel at a chip load of 0.002 inches/tooth and 1,500 RPM?",
      "options": ["6.0 inches/min", "7.5 inches/min", "9.0 inches/min", "10.5 inches/min"],
      "answer": "6.0 inches/min"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a knurling operation?",
      "options": ["To create a textured surface", "To cut threads", "To drill holes", "To remove material"],
      "answer": "To create a textured surface"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical surface finish achieved by milling with a carbide tool (in microinches)?",
      "options": ["16-32", "32-63", "63-125", "125-250"],
      "answer": "32-63"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the power required for a milling operation with a material removal rate of 1.5 in³/min and a specific cutting energy of 1.1 hp/in³/min?",
      "options": ["1.50 hp", "1.65 hp", "1.80 hp", "1.95 hp"],
      "answer": "1.65 hp"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical cutting speed for grinding stainless steel with a vitrified wheel (in ft/min)?",
      "options": ["3,000-4,000", "4,000-5,000", "5,000-6,000", "6,000-7,000"],
      "answer": "5,000-6,000"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the spindle speed for reaming a 1/2-inch hole in aluminum at a cutting speed of 100 ft/min?",
      "options": ["382 RPM", "509 RPM", "637 RPM", "764 RPM"],
      "answer": "382 RPM"
  },
  {
      "section": "Machining Operations",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a threading operation?",
      "options": ["To create external or internal threads", "To cut slots", "To drill holes", "To polish surfaces"],
      "answer": "To create external or internal threads"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the primary purpose of a depth micrometer?",
      "options": ["To measure the depth of holes or slots", "To check surface finish", "To measure angles", "To align components"],
      "answer": "To measure the depth of holes or slots"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical resolution of a digital height gauge?",
      "options": ["0.0001 inches", "0.0005 inches", "0.001 inches", "0.005 inches"],
      "answer": "0.0005 inches"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the tolerance for a Class FN4 fit with a nominal diameter of 1.5 inches (in inches)?",
      "options": ["+0.0016/-0.0000", "+0.0020/-0.0000", "+0.0024/-0.0000", "+0.0028/-0.0000"],
      "answer": "+0.0020/-0.0000"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a sine bar?",
      "options": ["To measure or set precise angles", "To check surface roughness", "To measure hole depth", "To align components"],
      "answer": "To measure or set precise angles"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical accuracy of a digital vernier caliper (in inches)?",
      "options": ["0.0005", "0.001", "0.005", "0.01"],
      "answer": "0.001"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the maximum permissible error for a Grade AA gage block (in microinches)?",
      "options": ["2", "4", "6", "8"],
      "answer": "2"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a ring gauge?",
      "options": ["To check external diameters", "To measure surface finish", "To check thread pitch", "To align components"],
      "answer": "To check external diameters"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical resolution of a digital angle finder?",
      "options": ["0.01 degrees", "0.05 degrees", "0.1 degrees", "0.5 degrees"],
      "answer": "0.1 degrees"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the tolerance for a Class RC6 fit with a nominal diameter of 1 inch (in inches)?",
      "options": ["+0.0024/-0.0000", "+0.0028/-0.0000", "+0.0032/-0.0000", "+0.0036/-0.0000"],
      "answer": "+0.0028/-0.0000"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a taper gauge?",
      "options": ["To measure taper angles", "To check surface finish", "To measure hole depth", "To align components"],
      "answer": "To measure taper angles"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical accuracy of a coordinate measuring machine (CMM) (in inches)?",
      "options": ["0.00001", "0.0001", "0.001", "0.01"],
      "answer": "0.0001"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the maximum permissible error for a master plug gauge (in inches)?",
      "options": ["0.00001", "0.00002", "0.00005", "0.0001"],
      "answer": "0.00001"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a precision square?",
      "options": ["To check perpendicularity", "To measure surface roughness", "To check thread pitch", "To measure hole depth"],
      "answer": "To check perpendicularity"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical flatness tolerance for a Grade A surface plate (in inches)?",
      "options": ["0.0001", "0.0002", "0.0005", "0.001"],
      "answer": "0.0001"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the tolerance for a Class LT6 fit with a nominal diameter of 1.5 inches (in inches)?",
      "options": ["+0.0020/-0.0000", "+0.0024/-0.0000", "+0.0028/-0.0000", "+0.0032/-0.0000"],
      "answer": "+0.0024/-0.0000"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a thread pitch gauge?",
      "options": ["To measure thread pitch", "To check surface finish", "To measure hole depth", "To align components"],
      "answer": "To measure thread pitch"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical accuracy of a digital depth micrometer (in inches)?",
      "options": ["0.0001", "0.0005", "0.001", "0.005"],
      "answer": "0.0001"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the maximum permissible error for a precision angle block (in seconds)?",
      "options": ["1", "2", "5", "10"],
      "answer": "2"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a go/no-go gauge?",
      "options": ["To check dimensional tolerances", "To measure surface finish", "To align components", "To measure angles"],
      "answer": "To check dimensional tolerances"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical resolution of a digital surface roughness tester (in microinches)?",
      "options": ["0.01", "0.1", "1.0", "10.0"],
      "answer": "0.1"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the tolerance for a Class RC9 fit with a nominal diameter of 2 inches (in inches)?",
      "options": ["+0.0052/-0.0000", "+0.0056/-0.0000", "+0.0060/-0.0000", "+0.0064/-0.0000"],
      "answer": "+0.0056/-0.0000"
  },
  {
      "section": "Measuring Tools and Metrology",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a dial test indicator?",
      "options": ["To measure small displacements", "To check thread pitch", "To measure surface roughness", "To align components"],
      "answer": "To measure small displacements"
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the primary purpose of a Unified National Coarse (UNC) thread?",
      "options": ["For general-purpose fastening", "For high-precision applications", "For high-temperature environments", "For thin materials"],
      "answer": "For general-purpose fastening"
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the pitch of a 1/4-20 UNC thread (in inches)?",
      "options": ["0.025", "0.050", "0.075", "0.100"],
      "answer": "0.050"
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the major diameter tolerance for a 1/2-13 UNC-2A external thread (in inches)?",
      "options": ["+0.000/-0.002", "+0.000/-0.003", "+0.000/-0.004", "+0.000/-0.005"],
      "answer": "+0.000/-0.003"
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a locknut?",
      "options": ["To prevent loosening under vibration", "To increase thread strength", "To reduce friction", "To align components"],
      "answer": "To prevent loosening under vibration"
  },
  {
      "section": "Fasteners and Threads",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical tensile strength of a Grade 5 bolt (in psi)?",
      "options": ["85,000", "105,000", "120,000", "150,000"],
      "answer": "120,000"
  },
  {
      "section": "Gears and Power Transmission",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the primary purpose of a spur gear?",
      "options": ["To transmit motion between parallel shafts", "To transmit motion at an angle", "To reduce speed", "To increase torque"],
      "answer": "To transmit motion between parallel shafts"
  },
  {
      "section": "Gears and Power Transmission",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the diametral pitch of a gear with 40 teeth and a pitch diameter of 4 inches?",
      "options": ["8", "10", "12", "16"],
      "answer": "10"
  },
  {
      "section": "Gears and Power Transmission",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the center distance for two spur gears with 20 and 40 teeth, each with a diametral pitch of 8 (in inches)?",
      "options": ["3.75", "4.00", "4.25", "4.50"],
      "answer": "3.75"
  },
  {
      "section": "Gears and Power Transmission",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the purpose of a clutch in a power transmission system?",
      "options": ["To engage or disengage power", "To reduce speed", "To increase torque", "To align shafts"],
      "answer": "To engage or disengage power"
  },
  {
      "section": "Gears and Power Transmission",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the typical pressure angle for standard spur gears?",
      "options": ["14.5 degrees", "20 degrees", "25 degrees", "30 degrees"],
      "answer": "20 degrees"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the formula for the area of a rectangle with length l and width w?",
      "options": ["A = l + w", "A = lw", "A = 2lw", "A = l/w"],
      "answer": "A = lw"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the tangent of 75 degrees trigonometric tables?",
      "options": ["0.268", "1.732", "3.732", "5.671"],
      "answer": "3.732"
  },
  {  
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the formula for the surface area of a sphere with radius r?",
      "options": ["A = πr²", "A = 2πr²", "A = 4πr²", "A = (4/3)πr²"],
      "answer": "A = 4πr²"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the decimal equivalent of 1/16 fraction tables?",
      "options": ["0.03125", "0.0625", "0.125", "0.1875"],
      "answer": "0.0625"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the cosine of 75 degrees?",
      "options": ["0.259", "0.5", "0.707", "0.966"],
      "answer": "0.259"
  },
  {
      "section": "Mathematics",
      "difficulty": "Hard",
      "type": "multiple_choice",
      "question": "What is the value of log₁₀(0.0001) logarithm tables?",
      "options": ["-2", "-3", "-4", "-5"],
      "answer": "-4"
  },
  {
      "section": "Mathematics",
      "difficulty": "Easy",
      "type": "multiple_choice",
      "question": "What is the value of 18², as referenced in the Machinery's Handbook exponent tables?",
      "options": ["304", "314", "324", "334"],
      "answer": "324"
  },
  {
      "section": "Mathematics",
      "difficulty": "Medium",
      "type": "multiple_choice",
      "question": "What is the formula for the perimeter of a regular hexagon with side s?",
      "options": ["P = 4s", "P = 5s", "P = 6s", "P = 7s"],
      "answer": "P = 6s"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the moment of inertia of a triangular section about an axis through its centroid perpendicular to the plane (where b is base and h is height)?",
    "options": ["I = bh³/12", "I = bh³/36", "I = bh³/3", "I = bh/12"],
    "answer": "I = bh³/36"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 17/32 fraction tables?",
    "options": ["0.46875", "0.5", "0.53125", "0.5625"],
    "answer": "0.53125"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the secant of 15 degrees?",
    "options": ["0.966", "1.035", "1.414", "2.0"],
    "answer": "1.035"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the volume of a spherical cap with radius r and height h?",
    "options": ["V = (1/3)πh²(3r - h)", "V = (1/2)πh²r", "V = πh²r", "V = (1/3)πhr²"],
    "answer": "V = (1/3)πh²(3r - h)"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the value of 19², as referenced in the Machinery's Handbook exponent tables?",
    "options": ["341", "351", "361", "371"],
    "answer": "361"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the cotangent of 15 degrees?",
    "options": ["0.268", "1.0", "3.732", "5.671"],
    "answer": "3.732"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the arc length of a circular segment with radius r and central angle θ in radians?",
    "options": ["L = rθ", "L = πrθ/180", "L = 2πrθ/360", "L = rθ/π"],
    "answer": "L = rθ"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 19/32 fraction tables?",
    "options": ["0.53125", "0.5625", "0.59375", "0.625"],
    "answer": "0.59375"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the sine of 75 degrees?",
    "options": ["0.259", "0.5", "0.707", "0.966"],
    "answer": "0.966"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the sum of the interior angles of a dodecagon, as provided in the Machinery's Handbook?",
    "options": ["1440 degrees", "1620 degrees", "1800 degrees", "1980 degrees"],
    "answer": "1800 degrees"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the value of 20², as referenced in the Machinery's Handbook exponent tables?",
    "options": ["380", "390", "400", "410"],
    "answer": "400"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the area of a regular octagon with side s?",
    "options": ["A = 2(1 + √2)s²", "A = 3s²", "A = 4s²", "A = (√2/2)s²"],
    "answer": "A = 2(1 + √2)s²"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the value of log₁₀(100,000) logarithm tables?",
    "options": ["3", "4", "5", "6"],
    "answer": "5"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 21/32 fraction tables?",
    "options": ["0.625", "0.65625", "0.6875", "0.71875"],
    "answer": "0.65625"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the cosecant of 75 degrees?",
    "options": ["0.966", "1.035", "1.414", "2.0"],
    "answer": "1.035"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the moment of inertia of a circular section about an axis perpendicular to the plane through its center (where r is radius)?",
    "options": ["I = πr⁴/2", "I = πr⁴/4", "I = πr³/2", "I = πr²/2"],
    "answer": "I = πr⁴/2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 23/32 fraction tables?",
    "options": ["0.6875", "0.71875", "0.75", "0.78125"],
    "answer": "0.71875"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the tangent of 90 degrees?",
    "options": ["0", "1.0", "Undefined", "∞"],
    "answer": "Undefined"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the centroid of a circular sector with radius r and angle θ in radians (distance from the center along the axis of symmetry)?",
    "options": ["(2r sin(θ/2))/θ", "(4r sin(θ/2))/(3θ)", "(r sin(θ))/θ", "(2r sin(θ))/(3θ)"],
    "answer": "(4r sin(θ/2))/(3θ)"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the value of 21², as referenced in the Machinery's Handbook exponent tables?",
    "options": ["421", "431", "441", "451"],
    "answer": "441"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the perimeter of a regular dodecagon with side s?",
    "options": ["P = 10s", "P = 11s", "P = 12s", "P = 13s"],
    "answer": "P = 12s"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the volume of a truncated cone with radii r₁, r₂, and height h?",
    "options": ["V = (1/3)πh(r₁² + r₂² + r₁r₂)", "V = πh(r₁² + r₂²)", "V = (1/2)πh(r₁ + r₂)", "V = πh(r₁r₂)"],
    "answer": "V = (1/3)πh(r₁² + r₂² + r₁r₂)"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a broaching operation?",
    "options": ["To create precise internal or external shapes", "To cut threads", "To drill holes", "To polish surfaces"],
    "answer": "To create precise internal or external shapes"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the recommended cutting speed for milling aluminum with a carbide cutter (in ft/min)?",
    "options": ["200-300", "300-400", "400-500", "500-600"],
    "answer": "400-500"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the spindle speed for drilling a 5/8-inch hole in aluminum at a cutting speed of 200 ft/min?",
    "options": ["611 RPM", "764 RPM", "916 RPM", "1222 RPM"],
    "answer": "611 RPM"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a planing operation?",
    "options": ["To produce flat surfaces", "To create threads", "To drill holes", "To shape gears"],
    "answer": "To produce flat surfaces"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical feed rate for drilling brass with a 1/2-inch drill (in inches per revolution)?",
    "options": ["0.006-0.009", "0.009-0.012", "0.012-0.015", "0.015-0.018"],
    "answer": "0.009-0.012"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the material removal rate for a turning operation with a depth of cut of 0.08 inches, feed rate of 0.012 inches/rev, and spindle speed of 800 RPM?",
    "options": ["0.77 in³/min", "0.92 in³/min", "1.15 in³/min", "1.38 in³/min"],
    "answer": "0.92 in³/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a slotting operation?",
    "options": ["To create slots or keyways", "To cut threads", "To drill holes", "To polish surfaces"],
    "answer": "To create slots or keyways"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical rake angle for a high-speed steel tool cutting brass?",
    "options": ["0-5 degrees", "5-10 degrees", "10-15 degrees", "15-20 degrees"],
    "answer": "5-10 degrees"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the feed rate for a 3-flute end mill cutting brass at a chip load of 0.004 inches/tooth and 1,600 RPM?",
    "options": ["14.4 inches/min", "19.2 inches/min", "24.0 inches/min", "28.8 inches/min"],
    "answer": "19.2 inches/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a grooving operation?",
    "options": ["To create narrow channels", "To cut threads", "To drill holes", "To polish surfaces"],
    "answer": "To create narrow channels"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical cutting speed for reaming brass with a high-speed steel reamer (in ft/min)?",
    "options": ["50-70", "70-90", "90-110", "110-130"],
    "answer": "70-90"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the power required for a milling operation with a material removal rate of 2.0 in³/min and a specific cutting energy of 1.2 hp/in³/min?",
    "options": ["2.0 hp", "2.4 hp", "2.8 hp", "3.2 hp"],
    "answer": "2.4 hp"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a countersinking operation?",
    "options": ["To create a conical recess", "To cut threads", "To drill holes", "To remove chips"],
    "answer": "To create a conical recess"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical depth of cut for finish milling brass?",
    "options": ["0.005-0.010 inches", "0.010-0.020 inches", "0.020-0.030 inches", "0.030-0.050 inches"],
    "answer": "0.005-0.010 inches"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the chip load for a 4-flute end mill cutting aluminum at a feed rate of 24 inches/min and 2,000 RPM?",
    "options": ["0.0020 inches/tooth", "0.0025 inches/tooth", "0.0030 inches/tooth", "0.0035 inches/tooth"],
    "answer": "0.0030 inches/tooth"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a parting operation?",
    "options": ["To cut off a workpiece", "To create threads", "To drill holes", "To polish surfaces"],
    "answer": "To cut off a workpiece"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical surface finish achieved by reaming (in microinches)?",
    "options": ["8-16", "16-32", "32-63", "63-125"],
    "answer": "16-32"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the spindle speed for turning a 2.5-inch diameter steel workpiece at a cutting speed of 100 ft/min?",
    "options": ["153 RPM", "191 RPM", "229 RPM", "267 RPM"],
    "answer": "153 RPM"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a facing operation on a milling machine?",
    "options": ["To create a flat surface", "To cut threads", "To drill holes", "To shape contours"],
    "answer": "To create a flat surface"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical clearance angle for a carbide tool cutting stainless steel?",
    "options": ["5-8 degrees", "8-12 degrees", "12-15 degrees", "15-20 degrees"],
    "answer": "5-8 degrees"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the material removal rate for a milling operation with a width of cut of 1.2 inches, depth of cut of 0.07 inches, and feed rate of 14 inches/min?",
    "options": ["0.84 in³/min", "1.18 in³/min", "1.51 in³/min", "1.85 in³/min"],
    "answer": "1.18 in³/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a boring bar in a lathe?",
    "options": ["To enlarge and finish holes", "To cut threads", "To create slots", "To polish surfaces"],
    "answer": "To enlarge and finish holes"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical feed rate for milling stainless steel with a carbide cutter (in inches per tooth)?",
    "options": ["0.002-0.004", "0.004-0.006", "0.006-0.008", "0.008-0.010"],
    "answer": "0.004-0.006"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the feed rate for a 5-flute end mill cutting aluminum at a chip load of 0.003 inches/tooth and 2,200 RPM?",
    "options": ["26.4 inches/min", "30.0 inches/min", "33.0 inches/min", "36.6 inches/min"],
    "answer": "33.0 inches/min"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a turning operation?",
    "options": ["To produce cylindrical surfaces", "To cut threads", "To drill holes", "To polish surfaces"],
    "answer": "To produce cylindrical surfaces"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical cutting speed for drilling stainless steel with a high-speed steel drill (in ft/min)?",
    "options": ["50-70", "70-90", "90-110", "110-130"],
    "answer": "70-90"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the power required for a turning operation with a material removal rate of 1.8 in³/min and a specific cutting energy of 1.3 hp/in³/min?",
    "options": ["2.04 hp", "2.34 hp", "2.64 hp", "2.94 hp"],
    "answer": "2.34 hp"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a threading operation on a lathe?",
    "options": ["To create external or internal threads", "To cut slots", "To drill holes", "To polish surfaces"],
    "answer": "To create external or internal threads"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical depth of cut for rough milling aluminum?",
    "options": ["0.050-0.100 inches", "0.100-0.150 inches", "0.150-0.200 inches", "0.200-0.250 inches"],
    "answer": "0.100-0.150 inches"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the spindle speed for milling a 2-inch diameter stainless steel workpiece at a cutting speed of 120 ft/min?",
    "options": ["191 RPM", "229 RPM", "267 RPM", "305 RPM"],
    "answer": "229 RPM"
  },
  {
    "section": "Machining Operations",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a shaper?",
    "options": ["To produce flat or contoured surfaces", "To create cylindrical parts", "To drill holes", "To polish surfaces"],
    "answer": "To produce flat or contoured surfaces"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a vernier height gauge?",
    "options": ["To measure vertical distances", "To check surface finish", "To measure angles", "To align components"],
    "answer": "To measure vertical distances"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital depth gauge?",
    "options": ["0.0001 inches", "0.0005 inches", "0.001 inches", "0.005 inches"],
    "answer": "0.0005 inches"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class LC5 fit with a nominal diameter of 1 inch (in inches)?",
    "options": ["+0.0016/-0.0000", "+0.0020/-0.0000", "+0.0024/-0.0000", "+0.0028/-0.0000"],
    "answer": "+0.0020/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a straightedge?",
    "options": ["To check flatness", "To measure angles", "To check thread pitch", "To measure surface roughness"],
    "answer": "To check flatness"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical accuracy of a digital protractor (in degrees)?",
    "options": ["0.01", "0.05", "0.1", "0.5"],
    "answer": "0.1"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum permissible error for a Grade A gage block (in microinches)?",
    "options": ["2", "4", "6", "8"],
    "answer": "4"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a radius gauge?",
    "options": ["To measure curved surfaces", "To check thread pitch", "To measure hole depth", "To align components"],
    "answer": "To measure curved surfaces"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical accuracy of a laser distance measurer (in inches)?",
    "options": ["0.001", "0.01", "0.1", "1.0"],
    "answer": "0.01"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class FN3 fit with a nominal diameter of 1 inch (in inches)?",
    "options": ["+0.0010/-0.0000", "+0.0012/-0.0000", "+0.0014/-0.0000", "+0.0016/-0.0000"],
    "answer": "+0.0012/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a combination square?",
    "options": ["To measure angles and check squareness", "To check surface finish", "To measure hole depth", "To align shafts"],
    "answer": "To measure angles and check squareness"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital micrometer?",
    "options": ["0.00005 inches", "0.0001 inches", "0.0005 inches", "0.001 inches"],
    "answer": "0.0001 inches"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum permissible error for a precision protractor (in minutes)?",
    "options": ["1", "2", "5", "10"],
    "answer": "5"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a feeler gauge?",
    "options": ["To measure small gaps", "To check thread pitch", "To measure surface roughness", "To align components"],
    "answer": "To measure small gaps"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical flatness tolerance for a Grade AA surface plate (in inches)?",
    "options": ["0.00005", "0.0001", "0.0002", "0.0005"],
    "answer": "0.00005"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class RC7 fit with a nominal diameter of 1.5 inches (in inches)?",
    "options": ["+0.0032/-0.0000", "+0.0036/-0.0000", "+0.0040/-0.0000", "+0.0044/-0.0000"],
    "answer": "+0.0036/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a thread micrometer?",
    "options": ["To measure thread pitch diameter", "To check surface finish", "To measure hole depth", "To align components"],
    "answer": "To measure thread pitch diameter"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical accuracy of a digital surface roughness tester (in microinches)?",
    "options": ["0.1", "0.5", "1.0", "5.0"],
    "answer": "0.5"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum permissible error for a master thread gauge (in inches)?",
    "options": ["0.00001", "0.00002", "0.00005", "0.0001"],
    "answer": "0.00002"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a precision level?",
    "options": ["To check horizontal or vertical alignment", "To measure surface roughness", "To check thread pitch", "To measure hole depth"],
    "answer": "To check horizontal or vertical alignment"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical resolution of a digital vernier caliper?",
    "options": ["0.0001 inches", "0.0005 inches", "0.001 inches", "0.005 inches"],
    "answer": "0.0005 inches"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the tolerance for a Class LT4 fit with a nominal diameter of 1 inch (in inches)?",
    "options": ["+0.0012/-0.0000", "+0.0016/-0.0000", "+0.0020/-0.0000", "+0.0024/-0.0000"],
    "answer": "+0.0012/-0.0000"
  },
  {
    "section": "Measuring Tools and Metrology",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the purpose of a profilometer?",
    "options": ["To measure surface roughness", "To check thread pitch", "To measure hole depth", "To align components"],
    "answer": "To measure surface roughness"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of force?",
    "options": ["A push or pull that causes motion or deformation", "The rate of change of velocity", "The resistance to motion", "The energy stored in an object"],
    "answer": "A push or pull that causes motion or deformation"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the acceleration of an object with force F and mass m?",
    "options": ["a = F/m", "a = m/F", "a = Fm", "a = F + m"],
    "answer": "a = F/m"
  },
  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the work done by a force of 50 lb applied over a distance of 10 ft?",
    "options": ["400 ft-lb", "450 ft-lb", "500 ft-lb", "550 ft-lb"],
    "answer": "500 ft-lb"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the resistance to motion between two surfaces in contact?",
    "options": ["Friction", "Inertia", "Momentum", "Torque"],
    "answer": "Friction"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the coefficient of friction for steel on steel (dry)?",
    "options": ["0.2-0.3", "0.4-0.5", "0.6-0.7", "0.8-0.9"],
    "answer": "0.6-0.7"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of stress?",
    "options": ["Force per unit area", "Deformation per unit length", "Energy stored in a material", "Resistance to deformation"],
    "answer": "Force per unit area"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the typical yield strength of AISI 1020 steel (in psi)?",
    "options": ["35,000", "50,000", "65,000", "80,000"],
    "answer": "50,000"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the maximum shear stress in a circular shaft with diameter d and torque T?",
    "options": ["τ = 16T/(πd³)", "τ = 8T/(πd³)", "τ = 4T/(πd²)", "τ = 2T/(πd²)"],
    "answer": "τ = 16T/(πd³)"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the maximum stress a material can withstand without permanent deformation?",
    "options": ["Yield strength", "Ultimate strength", "Fatigue strength", "Compressive strength"],
    "answer": "Yield strength"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the modulus of elasticity for aluminum (in psi)?",
    "options": ["5,000,000", "10,000,000", "15,000,000", "20,000,000"],
    "answer": "10,000,000"
  },
  {
    "section": "Gears and Gear Design",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is diametral pitch (DP)?",
    "options": [
      "Teeth per inch of pitch diameter",
      "Tooth height",
      "Pitch circle diameter",
      "Gear ratio"
    ],
    "answer": "Teeth per inch of pitch diameter"
  },
  {
    "section": "Gears and Gear Design",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does the gear ratio determine?",
    "options": [
      "Speed and torque relationship",
      "Backlash amount",
      "Tooth pressure angle",
      "Face width"
    ],
    "answer": "Speed and torque relationship"
  },
    {
    "section": "Shop Formulas",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the formula for calculating cutting speed (CS) in feet per minute (FPM) for a rotating workpiece?",
    "options": ["CS = (RPM × Diameter) / 12", "CS = (π × Diameter × RPM) / 12", "CS = RPM × 12 / Diameter", "CS = π × RPM × 12"],
    "answer": "CS = (π × Diameter × RPM) / 12"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does RPM stand for in machining calculations?",
    "options": ["Revolutions Per Minute", "Rate of Material Processing", "Rotational Power Measurement", "Revolutions Per Millisecond"],
    "answer": "Revolutions Per Minute"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for feed rate (FR) in inches per minute (IPM) for a milling operation?",
    "options": ["FR = RPM × Feed per Tooth", "FR = RPM × Number of Teeth × Feed per Tooth", "FR = RPM / Number of Teeth", "FR = Feed per Tooth / RPM"],
    "answer": "FR = RPM × Number of Teeth × Feed per Tooth"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "How is the material removal rate (MRR) calculated for a turning operation in cubic inches per minute?",
    "options": ["MRR = Depth of Cut × Feed Rate × Cutting Speed", "MRR = Depth of Cut × Feed Rate × Diameter", "MRR = Cutting Speed × Feed Rate", "MRR = Depth of Cut × RPM × 12"],
    "answer": "MRR = Depth of Cut × Feed Rate × Cutting Speed"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula to calculate the time (in minutes) required to machine a workpiece of length L (in inches) in a lathe operation?",
    "options": ["Time = L / (RPM × Feed Rate)", "Time = L × RPM × Feed Rate", "Time = RPM / (L × Feed Rate)", "Time = L × Feed Rate / RPM"],
    "answer": "Time = L / (RPM × Feed Rate)"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "In drilling, what is the formula for calculating the thrust force (F) in pounds, assuming a feed rate (f) in inches per revolution and a drill diameter (D) in inches for steel with a constant K = 0.7?",
    "options": ["F = K × f × D", "F = K × f / D", "F = K × D^2 × f", "F = K × f × RPM"],
    "answer": "F = K × f × D"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for horsepower (HP) required at the spindle for a machining operation, given material removal rate (MRR) in cubic inches per minute and a unit horsepower (UHP) specific to the material?",
    "options": ["HP = MRR / UHP", "HP = MRR × UHP", "HP = MRR × RPM / UHP", "HP = UHP / MRR"],
    "answer": "HP = MRR × UHP"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "For a milling operation, how is the chip load (CL) per tooth calculated given feed rate (FR) in inches per minute, RPM, and number of teeth (N)?",
    "options": ["CL = FR / (RPM × N)", "CL = FR × RPM × N", "CL = RPM / (FR × N)", "CL = FR / RPM"],
    "answer": "CL = FR / (RPM × N)"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula to calculate the spindle speed (RPM) for a given cutting speed (CS) in feet per minute and workpiece diameter (D) in inches?",
    "options": ["RPM = (CS × 12) / (π × D)", "RPM = CS × π × D", "RPM = CS / (12 × D)", "RPM = (CS × D) / 12"],
    "answer": "RPM = (CS × 12) / (π × D)"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the unit of feed per tooth in milling operations?",
    "options": ["Inches per minute", "Inches per revolution", "Inches per tooth", "Feet per minute"],
    "answer": "Inches per tooth"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the formula for IPM in milling?",
    "options": [
      "IPM = FPT \u00d7 RPM \u00d7 Number of Teeth",
      "IPM = RPM \u00d7 Diameter",
      "IPM = SFM \u00d7 4",
      "IPM = Depth \u00d7 Width"
    ],
    "answer": "IPM = FPT \u00d7 RPM \u00d7 Number of Teeth"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "How do you calculate HP for a cutting operation?",
    "options": [
      "HP = (Force \u00d7 Speed)/33000",
      "HP = RPM \u00d7 Torque",
      "HP = Voltage \u00d7 Amps",
      "HP = Weight \u00d7 Distance"
    ],
    "answer": "HP = (Force \u00d7 Speed)/33000"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does FPT stand for in machining?",
    "options": [
      "Feed per tooth",
      "Feet per tool",
      "Force per turn",
      "Feed pressure tolerance"
    ],
    "answer": "Feed per tooth"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "If SFM = 300 and tool diameter = 1\", what is RPM?",
    "options": [
      "1146",
      "300",
      "600",
      "946"
    ],
    "answer": "1146"
  },
  {
    "section": "Shop Formulas",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the chip load for a 2-flute end mill at 2000 RPM and 20 IPM?",
    "options": [
      "0.005",
      "0.002",
      "0.01",
      "0.0075"
    ],
    "answer": "0.005"
  },
    {
    "section": "Surface Finish",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary purpose of specifying surface finish in engineering drawings?",
    "options": ["To enhance the aesthetic appeal of a part", "To define the functional characteristics of a surface, such as friction or wear resistance", "To reduce manufacturing costs", "To simplify machining processes"],
    "answer": "To define the functional characteristics of a surface, such as friction or wear resistance"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which machining process typically produces the smoothest surface finish?",
    "options": ["Turning", "Milling", "Grinding", "Drilling"],
    "answer": "Grinding"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What does the term 'lay' refer to in the context of surface finish?",
    "options": ["The depth of surface irregularities", "The direction of the predominant surface pattern", "The overall thickness of the material", "The type of machining process used"],
    "answer": "The direction of the predominant surface pattern"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which instrument is most commonly used to measure surface roughness by physically contacting the surface?",
    "options": ["Profilometer", "Interferometer", "Optical Comparator", "Coordinate Measuring Machine (CMM)"],
    "answer": "Profilometer"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the effect of specifying a finer surface finish (lower Ra value) on manufacturing?",
    "options": ["Decreases production time", "Increases manufacturing cost and time", "Has no impact on cost or time", "Simplifies quality control"],
    "answer": "Increases manufacturing cost and time"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "According to *Machinery's Handbook*, which standard governs surface texture symbols and their application in the United States?",
    "options": ["ISO 1302", "ANSI/ASME Y14.36M", "DIN 4768", "JIS B 0601"],
    "answer": "ANSI/ASME Y14.36M"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "How is the Ra (Arithmetic Average Roughness) value calculated, as described in *Machinery's Handbook*?",
    "options": ["The average of the absolute deviations of the roughness profile from the mean line", "The maximum peak-to-valley height in the profile", "The root mean square of the profile heights", "The total area of surface irregularities"],
    "answer": "The average of the absolute deviations of the roughness profile from the mean line"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "In accordance with ANSI/ASME Y14.36M, what does the checkmark symbol (√) represent in surface finish notation?",
    "options": ["Material removal required", "Material removal prohibited", "Surface texture to be achieved by any method", "A mandatory polishing operation"],
    "answer": "Surface texture to be achieved by any method"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which of the following is considered a surface imperfection, as defined in *Machinery's Handbook*?",
    "options": ["Waviness", "Lay", "Flaws", "Roughness"],
    "answer": "Flaws"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which parameter is most commonly used for measuring surface roughness in the United States?",
    "options": ["Ra (Arithmetic Average Roughness)", "Rz (Average Maximum Height)", "Rq (Root Mean Square Roughness)", "Rt (Total Height of Profile)"],
    "answer": "Ra (Arithmetic Average Roughness)"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which finishing method produces the smoothest surface?",
    "options": [
      "Lapping",
      "Grinding",
      "Turning",
      "Milling"
    ],
    "answer": "Lapping"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What does Ra stand for in surface finish?",
    "options": [
      "Roughness average",
      "Root angle",
      "Radius average",
      "Runout average"
    ],
    "answer": "Roughness average"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Which process typically leaves a 3.2 \u00b5m Ra finish?",
    "options": [
      "Milling",
      "Turning",
      "Drilling",
      "Lapping"
    ],
    "answer": "Milling"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What tool is used to measure surface roughness?",
    "options": [
      "Profilometer",
      "Caliper",
      "Micrometer",
      "Feeler gauge"
    ],
    "answer": "Profilometer"
  },
  {
    "section": "Surface Finish",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Which unit is most commonly used for surface roughness in the U.S.?",
    "options": [
      "Microinches",
      "Micrometers",
      "Inches",
      "Millimeters"
    ],
    "answer": "Microinches"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the Pythagorean theorem?",
    "options": [
      "a\u00b2 + b\u00b2 = c\u00b2",
      "F = ma",
      "V = IR",
      "E = mc\u00b2"
    ],
    "answer": "a\u00b2 + b\u00b2 = c\u00b2"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the sine of 90 degrees?",
    "options": [
      "1",
      "0",
      "0.5",
      "0.707"
    ],
    "answer": "1"
  },
  {
    "section": "Mathematics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the decimal equivalent of 3/8?",
    "options": [
      "0.375",
      "0.25",
      "0.5",
      "0.625"
    ],
    "answer": "0.375"
  },
  {
    "section": "Mathematics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Convert 25.4 mm to inches.",
    "options": [
      "1 inch",
      "0.5 inch",
      "2 inches",
      "10 inches"
    ],
    "answer": "1 inch"
  },
  {
    "section": "Mathematics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is 45 degrees in radians?",
    "options": [
      "\u03c0/4",
      "\u03c0/2",
      "\u03c0/3",
      "\u03c0/6"
    ],
    "answer": "\u03c0/4"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "Which formula defines stress?",
    "options": [
      "Stress = Force / Area",
      "Stress = Mass \u00d7 Acceleration",
      "Stress = Force \u00d7 Time",
      "Stress = Distance / Time"
    ],
    "answer": "Stress = Force / Area"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is Young\u2019s modulus a measure of?",
    "options": [
      "Elasticity",
      "Toughness",
      "Plasticity",
      "Hardness"
    ],
    "answer": "Elasticity"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which property describes resistance to breaking under tension?",
    "options": [
      "Tensile strength",
      "Shear strength",
      "Hardness",
      "Fatigue limit"
    ],
    "answer": "Tensile strength"
  },
  {
    "section": "Materials",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What does the yield strength of a material represent?",
    "options": [
      "Stress where plastic deformation begins",
      "Ultimate tensile stress",
      "Elastic limit",
      "Proportional limit"
    ],
    "answer": "Stress where plastic deformation begins"
  },
  {
    "section": "Materials",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the unit of strain?",
    "options": [
      "It is unitless",
      "psi",
      "lb/in",
      "in\u00b2"
    ],
    "answer": "It is unitless"
  },
    {
    "section": "Electronics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the basic unit of electrical resistance, as defined in *Machinery's Handbook*?",
    "options": ["Ampere", "Volt", "Ohm", "Watt"],
    "answer": "Ohm"
  },
  {
    "section": "Electronics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does Ohm's Law describe?",
    "options": ["The relationship between voltage, current, and resistance", "The power dissipation in a capacitor", "The frequency of an AC circuit", "The magnetic field around a conductor"],
    "answer": "The relationship between voltage, current, and resistance"
  },
  {
    "section": "Electronics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the primary function of a capacitor in an electronic circuit?",
    "options": ["To resist current flow", "To store and release electrical energy", "To amplify signals", "To generate voltage"],
    "answer": "To store and release electrical energy"
  },
  {
    "section": "Electronics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the unit of electrical power, as used in *Machinery's Handbook*?",
    "options": ["Joule", "Watt", "Farad", "Henry"],
    "answer": "Watt"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for Ohm's Law, as presented in *Machinery's Handbook*?",
    "options": ["V = I × R", "V = I / R", "V = R / I", "V = I + R"],
    "answer": "V = I × R"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the equivalent resistance (R_eq) of two resistors R_1 and R_2 connected in series?",
    "options": ["R_eq = R_1 + R_2", "R_eq = R_1 × R_2", "R_eq = 1 / (R_1 + R_2)", "R_eq = R_1 / R_2"],
    "answer": "R_eq = R_1 + R_2"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the power (P) dissipated in a resistor, given voltage (V) and resistance (R)?",
    "options": ["P = V^2 / R", "P = V × R", "P = V / R", "P = V^2 × R"],
    "answer": "P = V^2 / R"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the purpose of a diode in an electronic circuit?",
    "options": ["To store charge", "To allow current flow in one direction only", "To amplify voltage", "To regulate frequency"],
    "answer": "To allow current flow in one direction only"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the unit of capacitance, as defined in *Machinery's Handbook*?",
    "options": ["Ohm", "Farad", "Henry", "Siemens"],
    "answer": "Farad"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the equivalent capacitance (C_eq) of two capacitors C_1 and C_2 connected in parallel?",
    "options": ["C_eq = C_1 + C_2", "C_eq = C_1 × C_2", "C_eq = 1 / (C_1 + C_2)", "C_eq = C_1 / C_2"],
    "answer": "C_eq = C_1 + C_2"
  },
  {
    "section": "Electronics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the resonant frequency (f) of an LC circuit, given inductance (L) in henries and capacitance (C) in farads?",
    "options": ["f = 1 / (2π √(L × C))", "f = 2π / √(L × C)", "f = √(L × C) / 2π", "f = 1 / (2π × L × C)"],
    "answer": "f = 1 / (2π √(L × C))"
  },
  {
    "section": "Electronics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "In a three-phase power system, what is the relationship between line voltage (V_L) and phase voltage (V_P) for a wye-connected system?",
    "options": ["V_L = V_P", "V_L = √3 × V_P", "V_L = V_P / √3", "V_L = V_P × 2"],
    "answer": "V_L = √3 × V_P"
  },
  {
    "section": "Electronics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the time constant (τ) of an RC circuit, given resistance (R) in ohms and capacitance (C) in farads?",
    "options": ["τ = R × C", "τ = R / C", "τ = C / R", "τ = R + C"],
    "answer": "τ = R × C"
  },
  {
    "section": "Electronics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "According to *Machinery's Handbook*, what is the impedance (Z) of a series RLC circuit at resonance?",
    "options": ["Z = R", "Z = R + j(X_L - X_C)", "Z = √(R^2 + (X_L - X_C)^2)", "Z = X_L + X_C"],
    "answer": "Z = R"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the primary function of a transformer in an electronic circuit?",
    "options": ["To store electrical energy", "To convert AC voltage levels", "To rectify AC to DC", "To filter high-frequency signals"],
    "answer": "To convert AC voltage levels"
  },
  {
    "section": "Electronics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the unit of electrical current, as defined in *Machinery's Handbook*?",
    "options": ["Volt", "Ampere", "Ohm", "Watt"],
    "answer": "Ampere"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the reactance (X_C) of a capacitor, given frequency (f) in hertz and capacitance (C) in farads?",
    "options": ["X_C = 1 / (2π × f × C)", "X_C = 2π × f × C", "X_C = f × C / 2π", "X_C = 1 / (f × C)"],
    "answer": "X_C = 1 / (2π × f × C)"
  },
  {
    "section": "Electronics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the power factor of an AC circuit, as described in *Machinery's Handbook*?",
    "options": ["The ratio of apparent power to reactive power", "The ratio of real power to apparent power", "The ratio of reactive power to real power", "The ratio of voltage to current"],
    "answer": "The ratio of real power to apparent power"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the purpose of a resistor in an electronic circuit?",
    "options": ["To store electrical energy", "To limit current flow or divide voltage", "To amplify signals", "To convert AC to DC"],
    "answer": "To limit current flow or divide voltage"
  },
  {
    "section": "Electronics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What does AC stand for in the context of electronics?",
    "options": ["Alternating Current", "Amplified Current", "Active Capacitance", "Analog Circuit"],
    "answer": "Alternating Current"
  },
  {
    "section": "Electronics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is Ohm's Law?",
    "options": ["Power equals current times voltage", "Voltage equals current times resistance", "Current equals voltage divided by resistance", "Resistance equals voltage times current"],
    "answer": "Current equals voltage divided by resistance"
  },
{
    "section": "Thermodynamics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the first law of thermodynamics, as described in *Machinery's Handbook*?",
    "options": ["Energy can be created but not destroyed", "Energy cannot be created or destroyed, only transferred or converted", "Entropy of a system always decreases", "Heat flows from cold to hot objects"],
    "answer": "Energy cannot be created or destroyed, only transferred or converted"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the SI unit of absolute temperature used in thermodynamic calculations?",
    "options": ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
    "answer": "Kelvin"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the ideal gas law, as presented in *Machinery's Handbook*?",
    "options": ["PV = nRT", "PV = mRT", "P = nRT/V", "V = nRT/P"],
    "answer": "PV = nRT"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "In a thermodynamic process, what does the term 'specific heat' refer to?",
    "options": ["The total heat capacity of a system", "The amount of heat required to raise the temperature of a unit mass by one degree", "The heat transfer rate per unit time", "The latent heat of phase change"],
    "answer": "The amount of heat required to raise the temperature of a unit mass by one degree"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the efficiency formula for a Carnot cycle, operating between hot and cold reservoirs at absolute temperatures T_H and T_C, respectively?",
    "options": ["η = 1 - (T_C / T_H)", "η = 1 - (T_H / T_C)", "η = T_H / (T_H + T_C)", "η = T_C / (T_H + T_C)"],
    "answer": "η = 1 - (T_C / T_H)"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "According to *Machinery's Handbook*, what is the formula for the change in entropy (ΔS) of a system undergoing a reversible process with heat transfer Q at constant temperature T?",
    "options": ["ΔS = Q / T", "ΔS = Q × T", "ΔS = Q / (T × m)", "ΔS = T / Q"],
    "answer": "ΔS = Q / T"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "In a Rankine cycle, what is the primary purpose of the pump?",
    "options": ["To increase the pressure of the liquid working fluid", "To heat the working fluid", "To condense the vapor", "To expand the vapor in the turbine"],
    "answer": "To increase the pressure of the liquid working fluid"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the formula for the work done (W) by a gas during an isobaric (constant pressure) process, given pressure (P) and change in volume (ΔV)?",
    "options": ["W = P / ΔV", "W = P × ΔV", "W = ΔV / P", "W = P × ΔV × T"],
    "answer": "W = P × ΔV"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What does the second law of thermodynamics state about entropy in an isolated system?",
    "options": ["Entropy remains constant", "Entropy always decreases", "Entropy never decreases", "Entropy is zero"],
    "answer": "Entropy never decreases"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the heat required to change a substance from solid to liquid without a change in temperature?",
    "options": ["Specific heat", "Latent heat of fusion", "Latent heat of vaporization", "Sensible heat"],
    "answer": "Latent heat of fusion"
  },
  {
    "section": "Thermodynamics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the Second Law of Thermodynamics?",
    "options": ["Energy cannot be created or destroyed", "Heat flows from hot to cold objects", "The entropy of an isolated system always increases", "Work can be completely converted to heat"],
    "answer": "The entropy of an isolated system always increases"
  },
  {
    "section": "Tools",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "Which tool is primarily used for measuring inside dimensions?",
    "options": ["Micrometer", "Caliper", "Feeler gauge", "Dial indicator"],
    "answer": "Caliper"
  },
  {
    "section": "Tools",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "As a general rule, how many teeth of a milling cutter should you have engaged in the cut?",
    "options": ["One", "No more than two", "As many as possible", "T=(300*D)/W, for face milling"],
    "answer": "No more than two"
  },
  {
    "section": "Tools",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "A single angle cutter is considered to be a right-hand cutter if it revovles clockwise:",
    "options": ["True", "False"],
    "answer": "True"
  },
    
  {
    "section": "Tools",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What type of drill is conventionally used for originating holes?",
    "options": ["Single Flute", "Two-Flute","Three-Flute","Four-Flute"],
    "answer": "Two-Flute"
  },
  {
    "section": "Tools",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "In general, what type of twist drill are preferrable over straight-shank types for drilling medium and large-size holes?",
    "options": ["Face mills", "Right hand cutters", "Taps", "Taper-shank drills"],
    "answer": "Taper-shank drills"
  },
  {
    "section": "Tools",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "Identify common difficulties encountered when reaming:",
    "options": ["Oversize Holes", "Holes with a poor finish", "Bellmouth holes", "All of the above"],
    "answer": "All of the above"
  },
  {
    "section": "Tools",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "A rotary cutting tool with one or more cutting elements used for enlarging to size and contour a previously formed hole that is primarily supported during the cutting action by the workpiece is called a:",
    "options": ["Drill", "End Mill", "Insert", "Reamer"],
    "answer": "Reamer"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the tendency of an object to resist changes in motion?",
    "options": ["Inertia", "Friction", "Momentum", "Torque"],
    "answer": "Inertia"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the definition of work?",
    "options": ["Force applied over a distance", "Mass times velocity", "Energy stored in an object", "The rate of energy transfer"],
    "answer": "Force applied over a distance"
  },
  {
    "section": "Mechanics",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the rotational equivalent of mass?",
    "options": ["Moment of inertia", "Torque", "Angular velocity", "Friction"],
    "answer": "Moment of inertia"
  },

  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the maximum stress a material can withstand before failure?",
    "options": ["Ultimate strength", "Yield strength", "Fatigue strength", "Compressive strength"],
    "answer": "Ultimate strength"
  },
  {
    "section": "Materials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "question": "What is the term for the ability of a material to deform without breaking?",
    "options": ["Ductility", "Hardness", "Brittleness", "Elasticity"],
    "answer": "Ductility"
  },

  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the angular velocity of a shaft rotating at 1,200 RPM (in radians per second)?",
    "options": ["100.5 rad/s", "125.7 rad/s", "150.8 rad/s", "175.9 rad/s"],
    "answer": "125.7 rad/s"
  },
  

{
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the kinetic energy of an object with mass m and velocity v?",
    "options": ["KE = mv", "KE = (1/2)mv²", "KE = mv²", "KE = (1/2)mv"],
    "answer": "KE = (1/2)mv²"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the coefficient of friction for lubricated steel on steel?",
    "options": ["0.05-0.10", "0.10-0.15", "0.15-0.20", "0.20-0.25"],
    "answer": "0.05-0.10"
  },
  {
    "section": "Mechanics",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "question": "What is the formula for the potential energy of an object with mass m, height h, and gravitational acceleration g?",
    "options": ["PE = mgh", "PE = (1/2)mgh", "PE = mg/h", "PE = mh/g"],
    "answer": "PE = mgh"
  },



  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the power output of a system with a torque of 100 ft-lb and a rotational speed of 1,800 RPM?",
    "options": ["32.4 hp", "34.3 hp", "36.2 hp", "38.1 hp"],
    "answer": "34.3 hp"
  },
  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the centripetal force required to keep a 2-lb object moving in a circle of radius 3 ft at a speed of 10 ft/s?",
    "options": ["6.25 lb", "8.33 lb", "10.42 lb", "12.50 lb"],
    "answer": "8.33 lb"
  },
  {
    "section": "Mechanics",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "question": "What is the impulse delivered by a 50-lb force acting for 0.2 seconds?",
    "options": ["8 lb-s", "10 lb-s", "12 lb-s", "14 lb-s"],
    "answer": "10 lb-s"
  },

]);

function addUniqueIdsToQuestions(questions) {
  return questions.map((q, idx) => ({
    ...q,
    id: q.id || `q_${idx + 1}`
  }));
}

/**
 * Helper function to organize test data by difficulty
 * Works with both grouped and ungrouped data
 */
const organizeTestData = (data) => {
  // Group questions by difficulty
  const groupedData = {
    Easy: [],
    Medium: [],
    Hard: []
  };
  
  // Add questions to their respective difficulty groups
  data.forEach(question => {
    // Normalize difficulty (to handle different capitalizations)
    const normalizedDifficulty = normalizeDifficulty(question.difficulty);
    
    if (groupedData[normalizedDifficulty]) {
      groupedData[normalizedDifficulty].push({
        ...question,
        difficulty: normalizedDifficulty  // Ensure consistent casing
      });
    } else {
      // Default to Medium if difficulty not recognized
      console.log(`Unrecognized difficulty "${question.difficulty}", defaulting to Medium`);
      groupedData.Medium.push({...question, difficulty: 'Medium'});
    }
  });
  
  return groupedData;
};

/**
 * Normalize difficulty level to match expected format
 */
const normalizeDifficulty = (difficulty) => {
  if (!difficulty) return 'Medium';
  
  const normalized = difficulty.toLowerCase().trim();
  
  if (normalized === 'easy' || normalized === 'beginner' || normalized === 'basic') {
    return 'Easy';
  } else if (normalized === 'medium' || normalized === 'intermediate' || normalized === 'moderate') {
    return 'Medium';
  } else if (normalized === 'hard' || normalized === 'difficult' || normalized === 'advanced' || normalized === 'expert') {
    return 'Hard';
  }
  
  // Default to Medium for unrecognized difficulties
  return 'Medium';
};

/**
 * Get a subset of questions for each difficulty level
 * Useful for large datasets to avoid loading all questions at once
 */
const getInitialQuestions = (organizedData, count = 10) => {
  const result = {
    Easy: [],
    Medium: [],
    Hard: []
  };
  
  // Get a subset of questions for each difficulty
  Object.keys(result).forEach(difficulty => {
    if (organizedData[difficulty] && organizedData[difficulty].length > 0) {
      // Shuffle the questions to get a random subset
      const shuffled = [...organizedData[difficulty]].sort(() => 0.5 - Math.random());
      result[difficulty] = shuffled.slice(0, count);
    }
  });
  
  return result;
};

/**
 * Get additional questions when needed
 */
const getAdditionalQuestions = (organizedData, currentQuestions, difficulty, count = 5) => {
  if (!organizedData[difficulty] || organizedData[difficulty].length === 0) {
    return [];
  }
  
  // Find questions that aren't already in the current set
  const currentIds = new Set(currentQuestions[difficulty].map(q => q.id));
  const additionalQuestions = organizedData[difficulty].filter(q => !currentIds.has(q.id));
  
  // Shuffle and take the requested count
  const shuffled = [...additionalQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export { 
  gameConfig, 
  sampleTestData, 
  organizeTestData, 
  normalizeDifficulty,
  getInitialQuestions,
  getAdditionalQuestions
};