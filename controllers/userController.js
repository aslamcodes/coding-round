export const registerUser = asyncHandler(async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });

  const id = req.file?.id;

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  try {
    const user = await User.create({
      ...req.body,
      avatar: id && id,
    });

    const feedbackUser = await User.findOne({
      email: "feedback@alumniportal.skct",
    });

    await Conversation.create({
      participants: [user._id, feedbackUser._id],
      createdBy: feedbackUser._id,
    });

    return res.status(200).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      token: generateToken(user._id),
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
});
