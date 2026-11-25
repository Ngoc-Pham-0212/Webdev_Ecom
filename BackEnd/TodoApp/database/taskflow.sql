
-- =========================================
-- TASKFLOW DATABASE
-- Microsoft SQL Server
-- =========================================

CREATE DATABASE taskflow_db;
GO

USE taskflow_db;
GO

-- =========================================
-- TABLE: tasks
-- =========================================

CREATE TABLE tasks (
    id INT IDENTITY(1,1) PRIMARY KEY,

    title NVARCHAR(255) NOT NULL,

    description NVARCHAR(MAX),

    due_date DATE NOT NULL,

    priority NVARCHAR(10) NOT NULL
        CONSTRAINT DF_tasks_priority DEFAULT 'MEDIUM',

    status NVARCHAR(20) NOT NULL
        CONSTRAINT DF_tasks_status DEFAULT 'TODO',

    created_at DATETIME2 DEFAULT SYSDATETIME(),

    updated_at DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT CK_tasks_priority
        CHECK (priority IN ('LOW', 'MEDIUM', 'HIGH')),

    CONSTRAINT CK_tasks_status
        CHECK (status IN ('TODO', 'IN_PROGRESS', 'COMPLETED'))
);
GO

-- =========================================
-- SAMPLE DATA
-- =========================================

INSERT INTO tasks
(title, description, due_date, priority, status)
VALUES
(
    N'Hoàn thành bài tập Node.js',
    N'Xây dựng REST API cho ứng dụng TaskFlow',
    CAST(GETDATE() AS DATE),
    'HIGH',
    'IN_PROGRESS'
),
(
    N'Đọc tài liệu SQL Server',
    N'Tìm hiểu cách sử dụng SQL Server',
    CAST(GETDATE() AS DATE),
    'MEDIUM',
    'TODO'
),
(
    N'Hoàn thành báo cáo',
    N'Viết báo cáo môn học',
    DATEADD(DAY, 1, CAST(GETDATE() AS DATE)),
    'HIGH',
    'TODO'
),
(
    N'Ôn tập JavaScript',
    N'Ôn tập kiến thức JavaScript cơ bản',
    DATEADD(DAY, 2, CAST(GETDATE() AS DATE)),
    'LOW',
    'COMPLETED'
),
(
    N'Thiết kế giao diện Dashboard',
    N'Hoàn thiện giao diện quản lý công việc',
    DATEADD(DAY, 3, CAST(GETDATE() AS DATE)),
    'MEDIUM',
    'IN_PROGRESS'
),
(
    N'Tìm hiểu Express.js',
    N'Tìm hiểu middleware và routing',
    DATEADD(DAY, -1, CAST(GETDATE() AS DATE)),
    'HIGH',
    'TODO'
),
(
    N'Kiểm tra tiến độ dự án',
    N'Đánh giá các công việc đã hoàn thành',
    DATEADD(DAY, 4, CAST(GETDATE() AS DATE)),
    'LOW',
    'COMPLETED'
),
(
    N'Chuẩn bị thuyết trình',
    N'Hoàn thiện slide và nội dung thuyết trình',
    DATEADD(DAY, 5, CAST(GETDATE() AS DATE)),
    'HIGH',
    'TODO'
);
GO

-- Kiểm tra dữ liệu
SELECT * FROM tasks;
GO
