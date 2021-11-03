export default (req: any, res: any) => {
  res.setHeader("Set-Cookie", `token; path=/; expires=-1`);
  res.status(200).json({ message: "logout success" });
};
