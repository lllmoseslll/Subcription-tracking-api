const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(error);

    //   mongoose bad objectId
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new Error(message);
      error.statusCode = 404;
    }
    //   mongoose duplicate key
    if (err.code === 11000) {
      const message = `Duplicate field ${Object.keys(err.keyValue)} entered`;
      error = new Error(message);
      error.statusCode = 400;
    }

    // mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message.join(","));
      error.statusCode = 407;
    }

    res.status(error.statusCode || 500).json({
      message: error.message || "server error",
      success: false,
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
