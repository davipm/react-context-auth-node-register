import 'dotenv/config';
import express from "express";
import cors from "cors";
import morgan from 'morgan';
import path from 'path';

import freelancerRoutes from "./routes/freelancers";
import companyRoutes from "./routes/company";
import profileRoutes from "./routes/profile";
import sessionRoutes from "./routes/sessions";

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('src/client/build'));
  app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// routes
app.use([freelancerRoutes, companyRoutes, profileRoutes, sessionRoutes]);

app.listen(process.env.PORT, () => {
  console.log(`Register incidents running in port ${process.env.PORT}`);
});
