const team = requireTeam;

// const addTeam = async (req, res, next)=>{
//     try {
//         const { name, manager, squadSize } = req.body;
//         const teamExists = Team.findOne({ name });
//         if (!name || !manager || !squadSize) {
//           return res.status(401).json({
//             message: `Please fill all required field`,
//           });
//         }
//         if (teamExists) {
//           return res.status(401).json({
//             message: `${name} has already been added to the database`,
//           });
//         }
//         const newTeam = new Fixture({ name, manager, squadSize });
//         return res.status(201).json({
//           message: `${name.toUpperCase()} has been added to the Premier League successfully`,
//         });
//     } catch (error) {
//         return res.status(500).json({
//           message: `Server Error...
//           ${error.message}`,
//         });
//     }
// }

const fixtures = async (req, res, next) => {
  try {
    const allFixtures = Fixture.find();
    return res.status(201).json({
      allFixtures,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server Error...
          ${error.message}`,
    });
  }
};

// const completedFixtures = async (req, res, next) => {
//   try {
//     const { status } = req.query;
//     const allCompletedFix = Team.find({status});
//     return res.status(201).json({
//       allCompletedFix,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Server Error...
//           ${error.message}`,
//     });
//   }
// };

const completedFixtures = async (req, res, next) => {
  try {
    const completedFixts = [];
    const allCompletedFixs = Fixture.find();
    for (allCompletedFix of allCompletedFixs) {
      if (allCompletedFix.status === "pending") {
        allCompletedFix.push(pendingFixts);
      }
    }
    return res.status(201).json({
      completedFixts,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server Error...
          ${error.message}`,
    });
  }
};

const pendingFixtures = async (req, res, next) => {
  try {
    const pendingFixts = [];
    const allPendingFixs = Team.find();
    for (pendingFix of allPendingFixs) {
      if (pendingFix.status === "pending") {
        pendingFixts.push(pendingFix);
      }
    }
    return res.status(201).json({
      pendingFixts,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server Error...
          ${error.message}`,
    });
  }
};

module.exports = {
  fixtures,
  pendingFixtures,
  completedFixtures,
};
