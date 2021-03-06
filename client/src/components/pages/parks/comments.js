<div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="form-heading text-center">Edit Comment</h1>
        </div>
        <div class="col-12">
            <form action="/parks/comments" method="POST">
                <div class="form-group">
                    <input id="input" class="form-control" type="text" name="comment[text]" placeholder="comment">
                </div>
                    <div class="form-group text-center">
                        <button type="submit" class="btn btn-lg btn-rounded edit-btn">Submit</button>
                    </div>
            </form>
                <a class="back-btn" href="/parks"><i class="fas fa-arrow-left"></i></a>
</div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="form-heading text-center">Add Comment to {park.name}</h1>
                </div>
                <div class="col-12">
                    <form action="/parks/comments" method="POST">
                        <div class="form-group">
                            <input id="input" class="form-control" type="text" name="comment[text]" placeholder="comment">
                </div>
                            <div class="form-group text-center">
                                <button type="submit" class="btn btn-lg btn-rounded add-btn">Submit</button>
                            </div>
            </form>
                        <a class="back-btn" href="/parks"><i class="fas fa-arrow-left"></i></a>
        </div>
                </div>
            </div>
