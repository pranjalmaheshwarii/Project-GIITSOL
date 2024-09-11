# Use the official MySQL image
FROM mysql:8.0

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=Pranjal2607!@
ENV MYSQL_DATABASE=employees_db
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=Pranjal2607!@

# Expose the default MySQL port
EXPOSE 3306

