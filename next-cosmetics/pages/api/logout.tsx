export default (req: any, res: any) => {
  res.setHeader("Set-Cookie", `token=; path=/; max-age=0`);
  res.status(200).json({ message: "logout success" });
};
