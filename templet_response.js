//--------------success default response-------------//
res.json({
  statusCode: 200,
  data: null,
  message: "User created successfully.",
  error: null,
  state: "OK",
});

res.json({
  statusCode: 400,
  data: null,
  message: "Something went wrong!",
  error: "Error",
  state: "OK",
});

//------------pagination-----------------//
({
  page: 1,
  perpage: 20,
  count: 0,
  sort: "asc",
});
